import { Pesquisador } from "./pesquisador";

export class Grupo {
    nome: string;
    integrantes: Pesquisador[];

    constructor() {
        this.clean();
    }

    clean() {
        this.nome = "";
        this.integrantes = [];
    }

    copyFrom(from: Grupo) {
        this.nome = from.nome;
        this.integrantes = from.integrantes;
    }
}

