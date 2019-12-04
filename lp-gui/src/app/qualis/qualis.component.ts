import { Component, OnInit } from '@angular/core';
import { QualisService } from './qualis.service';
import { Qualis } from '../../../../common/qualis';
@Component({
  selector: 'app-import',
  templateUrl:'./qualis.component.html',
  styleUrls: ['./qualis.component.css']
})
export class QualisComponent implements OnInit {

    private qualisTable : Qualis;

  constructor(private qualisService: QualisService) { }
  
  sendFile(file: File): void { 
    this.qualisService.sendFile(file).subscribe(
      (status) => {
          if (status) {
            this.getTable(); 
          }
      },
      msg => {
        alert(msg.message);
      }
    );
  }

  getTable() {
    this.qualisService.getQualis().subscribe(
        (table) => {
            this.qualisTable = table;
        },
        msg => {
            alert(msg.message);
        }
    )
  }

  onMove(): void {

  }

  ngOnInit(): void {

  }
}