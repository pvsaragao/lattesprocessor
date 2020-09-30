import { Relatorio } from '../common/relatorio';

export class RelatorioFactory {
    relatorios: Relatorio[];
    counter: number;

    constructor() {
        this.clean();
    }

    clean(): void {
        this.relatorios = [];
        this.counter = 0;
    }

    getRelatorios(): Relatorio[] {
        return this.relatorios;
    }

    addRelatorio(p: Relatorio): number {
        var rela = new Relatorio();
        rela.copyFrom(p);
        if (!this.findRelatorio(rela)){
            rela.id = this.counter;
            this.counter++;
            this.relatorios.push(rela);
          
            return rela.id;
        }
       

        return -1;
    }

    findRelatorio(r: Relatorio): Relatorio {
        var relatorioJaCadastrado = this.relatorios.find(a => JSON.stringify(a.pesquisadores) == JSON.stringify(r.pesquisadores) && 
                                                                a.dataFinal == r.dataFinal &&
                                                                a.dataInicial == r.dataInicial);

        if (relatorioJaCadastrado)
            return relatorioJaCadastrado;

        return relatorioJaCadastrado;
    }
    deleteRelatorio(id: number): number{
        if(id >= this.counter){
            return -1;
        } else{
            let relaIndex = this.relatorios.findIndex( (n) => {return n.id == id})
            if(relaIndex >= 0)
            this.relatorios.splice(relaIndex, 1);
        }
    }
}