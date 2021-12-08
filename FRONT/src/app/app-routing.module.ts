import { CadastrarFolhaComponent } from './components/views/folha/cadastrar-folha/cadastrar-folha.component';
import { CadastrarFuncionarioComponent } from './components/views/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { ListarFolhaComponent } from './components/views/folha/listar-folha/listar-folha.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
    {
        path: "",
        component: ListarFolhaComponent,
    },
    {
        path: "funcionario/cadastrar",
        component: CadastrarFuncionarioComponent,
    },
    {
        path: "folha/cadastrar",
        component: CadastrarFolhaComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
