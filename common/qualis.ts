export class Qualis {
    tabela : Map<string,{issn :string,avaliacao :string}>;

    constructor() {
        this.clean();
    }

    clean() {
        this.tabela = new Map<string,{issn :string,avaliacao :string}>();
    }
    
    //add methods here

    getAvaliacao(periodico : string) : string {
        return this.tabela.get(periodico).avaliacao;
    }

    getIssn(periodico : string) : string {
        return this.tabela.get(periodico).issn;
    }

    copyFrom() {
        
    }

    clone() {

    }
  }