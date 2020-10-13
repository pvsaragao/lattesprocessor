import { Component, OnInit } from '@angular/core';
import { Pesquisador } from '../../../../common/pesquisador';
import { PesquisadoresService } from './pesquisadores.service';

@Component({
  selector: 'app-pesquisadores',
  templateUrl: './pesquisadores.component.html',
  styleUrls: ['./pesquisadores.component.css']
})
export class PesquisadoresComponent implements OnInit {

  statusLattes: string = '';
  pesquisadores: Pesquisador[];

  constructor(private pesquisadorService: PesquisadoresService) { }

  uploadLattes(files: FileList): void {
    this.pesquisadorService.uploadLattes(files).subscribe(
      (status) => {
        if (status === true) {
          this.statusLattes = 'sucesso';
          this.pesquisadorService.getPesquisadores()
            .subscribe(
              ps => { this.pesquisadores = ps; },
              msg => { alert(msg.message); }
            );
        } else {
          this.statusLattes = 'erro';
        }
      },

      msg => {
        alert(msg.message);
      }
    );

  }

  onMove(): void {
    this.statusLattes = '';
  }

  ngOnInit(): void {
    this.pesquisadorService.getPesquisadores()
      .subscribe(
        ps => { this.pesquisadores = ps; },
        msg => { alert(msg.message); }
      );
  }

}
