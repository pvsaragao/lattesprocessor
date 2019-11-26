import  {Qualis} from '../common/qualis';
import {utils} from 'xlsx';

export class QualisFactory {
    // add atributes here
    qualisTable : Qualis;
    fileContent : JSON;
    // add methods here
    readXls(file : File) {

    }
    
    makeQualis() {
        
    }

    getQualis() : Qualis {
        return this.qualisTable;
    }
}