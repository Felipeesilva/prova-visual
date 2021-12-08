import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {
  id!: number;
  nome!: string;
  idade!: number;

  constructor(private router: Router, private service: FuncionarioService) { }

  ngOnInit(): void {}

  cadastrar( ): void{
    let funcionario: Funcionario = {
        nome: this.nome,
        idade: this.idade,
    }
    this.service.create(funcionario).subscribe((funcionario) => {
        console.log(funcionario);
    });

  }
}
