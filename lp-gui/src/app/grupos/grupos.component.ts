import { Component, OnInit } from '@angular/core';
import { Grupo } from '../../../../common/grupo';
import { GruposService } from './grupos.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  grupo: Grupo = new Grupo();
  grupos: Grupo[] = [];
  
  constructor(private gruposService: GruposService) {}

  criar(g: Grupo): void {
    this.gruposService.criar(g.clone())
      .subscribe(
        gr => {
          if (gr) {
            this.grupos.push(gr);
            this.grupo = new Grupo();
          } else {

          }
        },
        msg => { alert(msg.message);}
      );
  }

  ngOnInit() {
    this.gruposService.getGrupos()
             .subscribe(
               gs => { this.grupos = gs; },
               msg => { alert(msg.message); }
              );
     }
  }



