import { Qualis } from '../common/Qualis';

export class QualisFactory {

    qualis: Qualis[] = new Array();

    constructor(){
       
    }

    getQualis(): Qualis[] {
        return this.qualis;
    }
}