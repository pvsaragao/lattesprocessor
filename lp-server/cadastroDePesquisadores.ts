import { Pesquisador } from '../common/pesquisador';

export class CadastroDePesquisadores {
    pesquisadores: Pesquisador[];

    constructor() {
        this.clean();
    }

    clean(): void {
        this.pesquisadores = [];
    }

    getPesquisadores(): Pesquisador[] {
        return this.pesquisadores;
    }

    addPesquisador(p: Pesquisador): Pesquisador {
        var pesq = new Pesquisador();
        pesq.copyFrom(p);

        if (!this.findPesquisador(pesq))
            this.pesquisadores.push(p);

        return pesq;
    }

    findPesquisador(p: Pesquisador): boolean {
        var pesquisadorJaCadastrado = this.pesquisadores.find(a => a.nome === p.nome);

        if (pesquisadorJaCadastrado)
            return true;

        return false;
    }
}