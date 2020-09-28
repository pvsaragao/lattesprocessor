import { Relatorio } from '../common/relatorio';

export class RelatorioFactory {
    relatorios: Relatorio[];

    constructor() {
        this.clean();
    }

    clean(): void {
        this.relatorios = [];
    }

    getRelatorios(): Relatorio[] {
        return this.relatorios;
    }

    addRelatorio(p: Relatorio): number {
        var rela = new Relatorio();
        rela.copyFrom(p);
        if (!this.findRelatorio(rela)){
            
            this.relatorios.push(rela);
          
            return 1;
        }
       

        return 0;
    }

    findRelatorio(r: Relatorio): boolean {
        var relatorioJaCadastrado = this.relatorios.find(a => JSON.stringify(a.pesquisadores) == JSON.stringify(r.pesquisadores) && 
                                                                a.dataFinal == r.dataFinal &&
                                                                a.dataInicial == r.dataInicial);

        if (relatorioJaCadastrado)
            return true;

        return false;
    }
}