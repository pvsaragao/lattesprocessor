import { Grupo } from '../common/grupo';

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
        return (!this.grupos.find(g => g.nome == grupo.nome) && grupo.nome != "");
    }

    getGrupos() : Grupo[] {
        return this.grupos;
    }
    
}