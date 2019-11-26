import  {Qualis} from '../common/qualis';
import * as XLSX from 'xlsx';

export class QualisFactory {
    // add atributes here
    qualisTable : Qualis;
    fileContent : JSON = null;
    // add methods here
    readXls(file : string) {
        let workbook : XLSX.WorkBook = XLSX.read(file, {type : "binary"});
        let worksheet : XLSX.WorkSheet = workbook.Sheets[workbook.SheetNames[0]];
        this.fileContent = JSON.parse(JSON.stringify(XLSX.utils.sheet_to_json(worksheet)));
    }
    
    makeQualis() {
        this.qualisTable = new Qualis();
        let keys = Object.keys(this.fileContent);
        keys.forEach((key) => {
            this.qualisTable.addEntry(this.fileContent[key].Título, this.fileContent[key].ISSN, this.fileContent[key].Estrato);
        });
    }

    getFileContent() : JSON {
        return this.fileContent;
    }

    getQualis() : Qualis {
        return this.qualisTable;
    }
}