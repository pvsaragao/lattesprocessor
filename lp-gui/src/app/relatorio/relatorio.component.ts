import { Component, OnInit } from '@angular/core';
import { Relatorio } from '../../../../common/relatorio';
import { RelatorioService } from './relatorio.service';
import { Pesquisador } from '../../../../common/pesquisador';
import { PesquisadorService } from './pesquisador.service'
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
    pesquisadores: Pesquisador[] = [];

 

    constructor(private RelatorioService: RelatorioService, private PesquisadorService: PesquisadorService) { }
  

    montarRelatorio(): void {
    



    this.criarRelatorio(this.relatorio)
    }
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
        this.PesquisadorService.getPesquisadores()
            .subscribe(
                as => { this.pesquisadores = as; console.log(this.pesquisadores) },
                msg => { alert(msg.message); }
            )
        
    }

}