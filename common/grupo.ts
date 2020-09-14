import { Pesquisador } from "./pesquisador";

export class Grupo {
    nome: string;
    descricao: string;
    integrantes: Pesquisador[];

    constructor() {
        this.clean();
    }

    clean() {
        this.nome = "";
        this.descricao = "";
        this.integrantes = [];
    }
}

