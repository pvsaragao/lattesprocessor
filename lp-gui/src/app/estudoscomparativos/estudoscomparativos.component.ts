import { Component, OnInit } from '@angular/core';
import { Pesquisador } from '../../../../common/pesquisador';
import { EstudosComparativosService } from './estudoscomparativos.service';
import { PesquisadorService } from '../pesquisador/pesquisador.service';

@Component({
    selector: 'app-root',
    templateUrl: './estudoscomparativos.component.html',
    styleUrls: ['./estudoscomparativos.component.css']
})


export class estudoscomparativosComponent {

    pesquisadores: Pesquisador[] =  [];
    xlscarregado: boolean = true;
    pesos: any[] = [1,1,1,1,1,1,1,1];

    constructor(private ecService: EstudosComparativosService, private pqService: PesquisadorService) { }

    // onMove(): void {
    //     let xls: boolean = false;
    //     // checar se xls está carregado

    //     if (xls){
    //         this.xlscarregado = true;
    //     }
    //     else{
    //         this.xlscarregado = false;
    //     }
    //  }

    pesosInvalidos(): boolean {
        for (let i = 0; i < 8; i++) {
            if (isNaN(Number(this.pesos[i]))) {
                return true;
            }
        }
        return false;
    }

    updateXlsCarregado(): void {
        let pesqArr = [];
        this.pqService.getPesquisadores().subscribe(
            ps => { pesqArr = ps; },
            msg => { alert(msg.message); }
          );
          console.log(pesqArr);
          console.log(pesqArr.length);
        if (pesqArr.length > 0) {
            this.xlscarregado = true;
        }else{
            this.xlscarregado = false;
        }
    }

    gerarEstudo(): void {
        if (this.pesosInvalidos()) {
            alert('Pesos inválidos');
            return;
        }
        this.updateXlsCarregado();
        if (!this.xlscarregado) {
            alert('nenhum arquivo carregado');
        } else {
            this.ecService.getRanking(this.pesos);
        }
    }

     setPadrao(): void{
        this.pesos = [1,1,1,1,1,1,1,1];
     }
}

