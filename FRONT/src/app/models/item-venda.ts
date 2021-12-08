import { Produto } from "./folha";

export interface ItemVenda {
    id?: number;
    produto: Produto;
    produtoId: number;
    quantidade: number;
    preco: number;
    carrinhoId: string;
    criadoEm?: Date;
}
