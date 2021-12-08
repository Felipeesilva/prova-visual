using System;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/folhaPagamento")]
    public class FolhaPagamentoController : ControllerBase
    {
        private readonly DataContext _context;
        public FolhaPagamentoController(DataContext context)
        {
            _context = context;
        }


        [HttpPost]// POST: api/folhaPagamento/Create
        [Route("create")]
        public IActionResult Create ([FromBody] FolhaPagamento folhaPagamento)
        {
            FolhaPagamento folhaPagamentoEncontrado = _context.FolhaPagamentos.FirstOrDefault( f => f.Mes == folhaPagamento.Mes || f.Ano == folhaPagamento.Ano);
            if ( folhaPagamentoEncontrado == null ){
                _context.FolhaPagamentos.Add(folhaPagamento);
                _context.SaveChanges( );
                return Created(" ", folhaPagamento);
            }
            return NotFound("Dados repitidos!!!");
        }

        //GET: api/folhaPagamento/list
        [HttpGet]
        [Route("list")]
        public IActionResult List ( ) =>
        Ok(_context.FolhaPagamentos.ToList( ));

        //DELETE: /api/folhaPagamento/delete/1
        [HttpDelete]
        [Route("delete/{Id}")]
        public IActionResult Delete([FromRoute] int Id)
        {
            //Expressão lambda
            //Buscar um objeto na tabela de produtos com base no nome
            FolhaPagamento folhaPagamento = _context.FolhaPagamentos.FirstOrDefault(folhaPagamento => folhaPagamento.Id == Id);

            if (folhaPagamento == null)
            {
                return NotFound();
            }
            _context.FolhaPagamentos.Remove(folhaPagamento);
            _context.SaveChanges();
            return Ok(_context.FolhaPagamentos.ToList());
        }
    }
}