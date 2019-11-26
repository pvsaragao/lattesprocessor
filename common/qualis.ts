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
        this.tabela[periodico] = {issn: issn, avaliacao: avaliacao};
    }

    assertKey(periodico : string) : boolean {
        return this.tabela.has(periodico);
    }

    getAvaliacao(periodico : string) : string {
        return this.tabela.get(periodico).avaliacao;
    }

    getIssn(periodico : string) : string {
        return this.tabela.get(periodico).issn;
    }

    copyFrom(qualis : Qualis) {
        this.tabela = new Map<string,{issn :string,avaliacao :string}>();
        for (let key in qualis) {
            this.tabela[key] = qualis[key];
        }
    }

    clone() : Qualis {
        let copy : Qualis = new Qualis();
        copy.copyFrom(this);
        return copy;
    }

    getSize() : number {
        return this.tabela.size;
    }
  }