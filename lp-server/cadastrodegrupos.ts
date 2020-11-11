import { Grupo } from '../common/grupo';
import { Pesquisador } from '../common/pesquisador';

export class CadastroDeGrupos {
    grupos: Grupo[];
    
    constructor() {
        this.grupos = [];
    }

    addGrupo(g: Grupo) : Grupo {
        let result = null;
        if (this.nomevalido(g)) {
            result = new Grupo();
            result.copyFrom(g);
            this.grupos.push(result);
        }

        return result;
    }

    nomevalido(grupo: Grupo) {
        return !(this.grupos.find(g => g.nome == grupo.nome)) && grupo.nome != "";
    }

    getGrupos() : Grupo[] {
        return this.grupos;
    }

    addPesquisador(nome: String, pesq: Pesquisador): Grupo[] {
        let result = null;
        let index = this.grupos.findIndex(g => g.nome === nome);
        if (!this.findPesquisador(pesq, index)) {
            this.grupos[index].integrantes.push(pesq);
            result = this.grupos;
        }
        return result;
    }

    findPesquisador(pesq: Pesquisador,i: any) {
        if (this.grupos[i].integrantes.find(p => p.nome === pesq.nome)) {
            return true;
        }
        return false;
    }
    
}