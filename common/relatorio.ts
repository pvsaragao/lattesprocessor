import { Qualis } from './Qualis';
import { Pesquisador } from './pesquisador';

function getNota(nota: string): number {

    nota = nota.toLowerCase();
    if(nota.charAt(0) == 'a'){
        return ( 9 - parseInt(nota.charAt(1)))
    }else if(nota.charAt(0) == 'b'){
        return ( 5 - parseInt(nota.charAt(1)))
    }else{
        return 0;
    }
    
}
function getIndexes(element: number, elements: number[]) {
    
}

export class Relatorio {
    pesquisadores: Pesquisador[];
    dataInicial: number;
    dataFinal: number;
    classificacao: Pesquisador[];
    maisPublicacoes: Pesquisador[];
    melhorMedia: Pesquisador[];
    maisMaximas: Pesquisador[];
 


    constructor() {
        this.clean();
    }

    clean(): void {
        this.pesquisadores = [];
        this.dataInicial =  null;
        this.dataFinal = null;
        this.classificacao = [];
        this.maisPublicacoes = [];
        this.melhorMedia = [];
        this.maisMaximas = [];
   
    }

    clone(): Relatorio {
        var relatorio: Relatorio = new Relatorio();
        relatorio.copyFrom(this);
        return relatorio;
    }

    copyFrom(from: Relatorio): void {
        this.pesquisadores = from.pesquisadores.slice(0);
        this.dataInicial = from.dataInicial;
        this.dataFinal = from.dataFinal;
        this.classificacao = from.classificacao.slice(0);
        this.maisPublicacoes = from.maisPublicacoes.slice(0);
        this.melhorMedia = from.melhorMedia.slice(0);
        this.maisMaximas = from.maisMaximas.slice(0);
        //this.copyClassAndMediaFrom(from.classificacao, from.medias);
    }
  


    generate(qualis: Qualis[]): void {
        this.classificacao = [];
        this.maisPublicacoes = [];
        this.melhorMedia = [];
        this.maisMaximas = [];
        this.classificacao = this.pesquisadores.slice(0);
        let AnoFin;
        let AnoIni;
        let medias = new Array(this.pesquisadores.length);
        let notasmaximas = new Array(this.pesquisadores.length);
        let artigos = new Array(this.pesquisadores.length);
        artigos.fill(0);
        notasmaximas.fill(0);
        medias.fill(0);
        if(this.dataFinal == null) AnoFin = Infinity; else AnoFin = this.dataFinal;
        if(this.dataInicial == null) AnoIni = -Infinity; else AnoIni = this.dataInicial;
         for(let qual of qualis){
             if(qual.ano >= AnoIni && qual.ano <= AnoFin){
                let pesq = this.pesquisadores.find( (atual) => {
                
                    return atual.publicacoes.findIndex( (publiatual) => { return publiatual.issn == qual.issn} ) != -1;
                } )
                if(pesq){
                let pesqIndex = this.pesquisadores.findIndex( (atual) => {return atual.nome == pesq.nome});
                let tempNota = getNota(qual.avaliacao);
                medias[pesqIndex] += tempNota;
                if(tempNota == 8){
                    notasmaximas[pesqIndex]++;
                }
                artigos[pesqIndex]++;

               }
            }
         }

         for(let i = 0; i < medias.length; i++){
             medias[i] /= artigos[i];
         }

        let maiormedia = medias.reduce(function (a, b) {
            return Math.max(a, b);
        });
        let maiormaxima = notasmaximas.reduce(function (a, b) {
            return Math.max(a, b);
        });
        let maisartigos = artigos.reduce(function (a, b) {
            return Math.max(a, b);
        });
        for (let i = 0; i < medias.length; i++){
            if(medias[i] == maiormedia) this.melhorMedia.push(this.pesquisadores[i])
        }
        for (let i = 0; i < notasmaximas.length; i++) {
            if (notasmaximas[i] == maiormaxima) this.maisMaximas.push(this.pesquisadores[i])
        }
        for (let i = 0; i < artigos.length; i++) {
            if (artigos[i] == maisartigos) this.maisPublicacoes.push(this.pesquisadores[i])
        }
     
     

      

        

    }
    

    

    /*copyClassAndMediaFrom(from: Map<string, string>, from1:Map<string, number>): void {
        this.classificacao = new Map<string, string>();
        this.medias = new Map<string, number>();
        for (let key in from) {
            this.classificacao[key] = from[key];
        }
        for (let key in from1) {
            this.medias[key] = from1[key];
        }
    }*/
}