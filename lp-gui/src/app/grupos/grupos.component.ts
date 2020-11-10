import { Component, OnInit } from '@angular/core';
import { Grupo } from '../../../../common/grupo';
import { Pesquisador } from '../../../../common/pesquisador';
import { GruposService } from './grupos.service';
import { PesquisadorService } from '../pesquisador/pesquisador.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  
  grupo: Grupo = new Grupo();
  grupos: Grupo[] = [];
  nomeInvalido: boolean = false
  pesquisadores: Pesquisador[] = [];
  
  constructor(private gruposService: GruposService, 
              private pesquisadorService: PesquisadorService) {}

  criar(g: Grupo): void {
    this.gruposService.criar(g.clone())
      .subscribe(
        gr => {
          if (gr) {
            this.grupos.push(gr);
            this.grupo = new Grupo();
          } else {
            this.nomeInvalido = true
          }
        },
        msg => { alert(msg.message);}
      );
  }

  onMove(): void {
    this.nomeInvalido = false
  }

  ngOnInit(): void {
    this.gruposService.getGrupos()
             .subscribe(
               gs => { this.grupos = gs; },
               msg => { alert(msg.message); }
              );

    this.pesquisadorService.getPesquisadores()
              .subscribe(
                ps => {this.pesquisadores = ps; },
                msg => { alert(msg.message); }
              );
    }

  }



