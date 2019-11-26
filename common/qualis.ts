export class Qualis {
    tabela : Map<string,{issn :string,avaliacao :string}>;

    constructor() {
        this.clean();
    }

    clean() {
        this.tabela = new Map<string,{issn :string,avaliacao :string}>();
    }
    
    //add methods here

    addEntry(periodico : string, issn : string, avaliacao : string) {

    }

    assertKey(periodico : string) : boolean {
        return null;
    }

    getAvaliacao(periodico : string) : string {
        return this.tabela.get(periodico).avaliacao;
    }

    getIssn(periodico : string) : string {
        return this.tabela.get(periodico).issn;
    }

    copyFrom(qualis : Qualis) {
        
    }

    clone() : Qualis {
        return null;
    }

    getSize() : number {
        return null;
    }
  }