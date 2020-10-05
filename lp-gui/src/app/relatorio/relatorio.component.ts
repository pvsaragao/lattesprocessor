import { Component, OnInit } from '@angular/core';
import { Relatorio } from '../../../../common/relatorio';
import { RelatorioService } from './relatorio.service';
import { Pesquisador } from '../../../../common/pesquisador';
import { Publicacao } from '../../../../common/publicacao';

@Component({
    selector: 'app-root',
    templateUrl: './relatorio.component.html',
    styleUrls: ['./relatorio.component.css']
})

export class RelatorioComponent implements OnInit {

    relatorio: Relatorio = new Relatorio();
    relatorios: Relatorio[] = [];
    render: Map<number, boolean> = new Map<number, boolean>();
    nome1: string = "";
    nome2: string = "";
    nome3: string = "";
    id: string = "";
    index: string = "";
 

    constructor(private RelatorioService: RelatorioService) { }

    montarRelatorio(p1: string, p2: string, p3: string): void {
    var pesq1 = new Pesquisador();
    var pesq2 = new Pesquisador();
    var pesq3 = new Pesquisador();

    pesq1.nome = p1
    pesq2.nome = p2
    pesq3.nome = p3
    let pesq1p1 = new Publicacao();
    let pesq1p2 = new Publicacao();
    let pesq1p3 = new Publicacao();
    let pesq2p1 = new Publicacao();
    let pesq2p2 = new Publicacao();
    let pesq2p3 = new Publicacao();
    let pesq3p1 = new Publicacao();
    let pesq3p2 = new Publicacao();
    let pesq3p3 = new Publicacao();
    let pesq3p4 = new Publicacao();
    pesq1.publicacoes.push(pesq1p1)
    pesq1.publicacoes.push(pesq1p2)
    pesq1.publicacoes.push(pesq1p3)
    pesq2.publicacoes.push(pesq2p1)
    pesq2.publicacoes.push(pesq2p2)
    pesq2.publicacoes.push(pesq2p3)
    pesq3.publicacoes.push(pesq3p1)
    pesq3.publicacoes.push(pesq3p2)
    pesq3.publicacoes.push(pesq3p3)
    pesq3.publicacoes.push(pesq3p4)
    pesq1p1.titulo = "Publicacao A"
    pesq1p2.titulo = "Publicacao B"
    pesq1p3.titulo = "Publicacao C"
    pesq1p1.periodico = "Publicacao AAA"
    pesq1p2.periodico = "Publicacao BBB"
    pesq1p3.periodico = "Publicacao CCC"
    pesq1p1.issn = "0001"
    pesq1p2.issn = "0002"
    pesq1p3.issn = "0003"
    pesq2p1.titulo = "Publicacao D"
    pesq2p2.titulo = "Publicacao E"
    pesq2p3.titulo = "Publicacao F"
    pesq2p1.periodico = "Publicacao DDD"
    pesq2p2.periodico = "Publicacao EEE"
    pesq2p3.periodico = "Publicacao FFF"
    pesq2p1.issn = "0004"
    pesq2p2.issn = "0005"
    pesq2p3.issn = "0006"
    pesq3p1.titulo = "Publicacao G"
    pesq3p2.titulo = "Publicacao H"
    pesq3p3.titulo = "Publicacao I"
    pesq3p1.periodico = "Publicacao GGG"
    pesq3p2.periodico = "Publicacao HHH"
    pesq3p3.periodico = "Publicacao III"
    pesq3p1.issn = "0007"
    pesq3p2.issn = "0008"
    pesq3p3.issn = "0009"
    pesq3p4.titulo = "Publicacao J"
    pesq3p4.periodico = "Publicacao JJJ"
    pesq3p4.issn = "0010"
    var relatorio = new Relatorio();
    relatorio.pesquisadores.push(pesq1);
    relatorio.pesquisadores.push(pesq2);
    relatorio.pesquisadores.push(pesq3);



    this.criarRelatorio(relatorio)
    }
    /*mudar(index: string, id: string):void {
        this.relatorios[parseInt(index)].changeId(parseInt(id));
   }*/
    logar():void {
        console.log(this.relatorios)
    }
    criarRelatorio(relatorio: Relatorio): void {
     
        this.RelatorioService.criar(relatorio)
            .subscribe(
                ar => {
                    console.log(ar);
                    if (ar) {
                        console.log(ar);
                        this.render.set(ar.id, false);
                        this.relatorios.push(ar);
                        this.relatorio = new Relatorio();
                    }
                },
                error => {
                    alert("Esse relatorio já foi criado. Mude os pesquisadores ou atualize o relatorio ja existente.")

                }
            );

    }
    deletarRelatorio(relatorioid: number): void {
        this.RelatorioService.deletar(relatorioid)
            .subscribe(
                ar => {
                    //SUCESSO
                },
                error => {
                    //FALHOU
                }
            )
    }
    atualizarRelatorio(relatorioid: number): void {
        this.RelatorioService.atualizar(relatorioid)
            .subscribe(
                ar => {
                    //SUCESSO
                },
                error => {
                    //FALHOU
                }


            )
    }

    atualizarRender(id: number): void{
            console.log(this.render)
            this.render.set(id, !this.render.get(id))
        
    }
    getRender(id: number): boolean {
        if (this.render.has(id)) {
            return this.render.get(id)
        }
        else{
           
            return false;
        }
    }
    getNomes(array: Pesquisador[]): string[]{
        return array.map(a => a.nome);
    } 
   /*onMove(): void {
        this.cpfduplicado = false;
        this.githubduplicado = false;
    }*/

    ngOnInit(): void {
        this.RelatorioService.getRelatorios()
            .subscribe(
                as => { this.relatorios = as; },
                msg => { alert(msg.message); }
            );
    }

}