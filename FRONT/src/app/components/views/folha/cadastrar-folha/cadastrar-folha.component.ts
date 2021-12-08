import { FuncionarioService } from 'src/app/services/funcionario.service';
import { FolhaService } from './../../../../services/folha.service';
import { Funcionario } from 'src/app/models/funcionario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Folha } from 'src/app/models/folha';

@Component({
  selector: 'app-cadastrar-folha',
  templateUrl: './cadastrar-folha.component.html',
  styleUrls: ['./cadastrar-folha.component.css']
})
export class CadastrarFolhaComponent implements OnInit {
  
  horasTrabalhadas!: number;
  valorHora!: number;
  ano!: number;
  mes!: number;

  funcionarios!: Funcionario[];
  funcionarioId!: number;

  constructor(private router: Router, private service: FolhaService, private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarioService.list().subscribe((funcionarios) => {
      this.funcionarios = funcionarios;
  });
  }

  cadastrar( ): void{
    let folha: Folha = {
      horasTrabalhadas: this.horasTrabalhadas,
      valorHora: this.valorHora,
      ano: this.ano,
      mes: this.mes,
      funcionarioId: this.funcionarioId
    }
    this.service.create(folha).subscribe((folha) => {
      console.log(folha);
      this.router.navigate([""]);
   });
}

}
