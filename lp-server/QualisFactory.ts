import  { Qualis } from '../common/Qualis';
import * as XLSX from 'xlsx';

export class QualisFactory {
    
    qualis: Qualis [];
    workbook : XLSX.WorkBook;
    worksheet : XLSX.WorkSheet;
    fileContent : JSON;
    typeQualisContent : string;
    yearContent: number;
    readonly typesAvailable: string[] = ["periodico", "evento"];

    
    constructor() {
      this.clean()
    }

    readXls(type: string, year: number, file : string) {
        this.workbook = XLSX.read(file, {type : "binary"});
        this.worksheet = this.workbook.Sheets[this.workbook.SheetNames[0]];
        if (this.assertIsQualis() && this.assertType(type)) {
            this.fileContent = JSON.parse(JSON.stringify(XLSX.utils.sheet_to_json(this.worksheet)));
            this.yearContent = year;
            this.typeQualisContent = type;
        }
    }

    assertIsQualis() : boolean {
        let range : XLSX.Range = XLSX.utils.decode_range(this.worksheet['!ref']);
        if (this.assertColumns(range)) {
            return true;
        } else return false;
    }

    assertColumns(range : XLSX.Range) : boolean {
        let refISSN = XLSX.utils.encode_cell({c:0, r:0});
        let refTitulo = XLSX.utils.encode_cell({c:1, r:0});
        let refEstrato = XLSX.utils.encode_cell({c:2, r:0});
        let cellISSN = this.worksheet[refISSN].v;
        let cellTitulo = this.worksheet[refTitulo].v;
        let cellEstrato = this.worksheet[refEstrato].v; 
        if (range.e.c == 2 && cellISSN == "ISSN" && cellTitulo == "Título" && cellEstrato == "Estrato") {
            return true;
        } else return false;
    }

    assertType (type: string): boolean {
      return (this.typesAvailable.includes(type)) ? true : false;
    }

    assertYear (year: string): boolean {
      return (typeof year === "number") ? true : false;
    }

    clean() {
      this.qualis = [];
    }

    makeQualis() {
        let keys = Object.keys(this.fileContent);
        keys.forEach((key) => {
            this.create(this.yearContent, this.fileContent[key].Título, this.typeQualisContent, this.fileContent[key].ISSN, this.fileContent[key].Estrato);
        });
    }

    create(year:number, title: string, type: string, issn: string, rating: string) {
      if (!this.assertKey(year, title)) {
        this.qualis.push(new Qualis(title, year,type, issn, rating))
      }
    }

    get(): Qualis[] {
      return this.qualis;
    }

    delete(year: number, type: string): void {
      this.qualis = this.qualis.filter(q => !(q.ano === year &&  q.tipo === type))
    }
  
    assertKey(ano:number, titulo: string): boolean {
      const qualis = this.qualis.find(q => q.ano === ano && q.titulo === titulo);
      return (qualis)? true : false;
    }

    getFileContent(): JSON {
      return this.fileContent
    }
}