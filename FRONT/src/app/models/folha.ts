import { Funcionario } from "./funcionario";

export interface Folha {
    id?: number;
    horasTrabalhadas: number;
    valorHora: number;
    ano: number;
   mes: number;
    criadoem?: string;
    funcionarioId: number;
    funcionario?: Funcionario;
}
