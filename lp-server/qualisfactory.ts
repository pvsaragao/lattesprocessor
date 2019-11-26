import  {Qualis} from '../common/qualis';
import * as XLSX from 'xlsx';

export class QualisFactory {
    // add atributes here
    qualisTable : Qualis;
    fileContent : JSON = null;
    // add methods here
    readXls(file : File) {
        let workbook : XLSX.WorkBook = XLSX.read(file);
        let worksheet : XLSX.WorkSheet = workbook.Sheets[workbook.SheetNames[0]];
        this.fileContent = JSON.parse(JSON.stringify(XLSX.utils.sheet_to_json(worksheet)));
    }
    
    makeQualis() {
        
    }

    getFileContent() : JSON {
        return this.fileContent;
    }

    getQualis() : Qualis {
        return this.qualisTable;
    }
}