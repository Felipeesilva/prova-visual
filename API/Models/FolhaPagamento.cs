using System;

namespace API.Models
{
    public class FolhaPagamento
    {
        public FolhaPagamento() => CriadoEm = DateTime.Now;
        public int Id { get; set; }
        public int HorasTrabalhadas { get; set; }
        public int ValorHora { get; set; }
        public int Ano { get; set; }
        public int Mes { get; set; }
        public int FuncionarioId { get; set;}
        public Funcionario funcionario { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}