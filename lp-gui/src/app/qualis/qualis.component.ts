import { Component, OnInit } from '@angular/core';
import { QualisService } from './qualis.service';

@Component({
  selector: 'app-import',
  templateUrl:'./qualis.component.html',
  styleUrls: ['./qualis.component.css']
})
export class QualisComponent implements OnInit {

    private qualisTable : Map<string,{issn :string,avaliacao :string}> = null;
    private path : File;

  constructor(private qualisService: QualisService) { }
  
  sendFile(file: File): void {
    // let reader = new FileReader();
    // reader.onload = (e) =>  {
    //   let text = reader.result;
    // }
    // reader.readAsText(file, "binary"); 
    this.qualisService.sendFile(file).subscribe(
      (status) => {
            this.getTable();  
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