import { Pesquisador } from '../common/pesquisador';

export class CadastroDePesquisadores {
  pesquisadores: Pesquisador[] = [];

  constructor() {
    this.pesquisadores = [];
  }

  //methods go here
  addPesquisador(p: Pesquisador): Pesquisador {
    let result = null;

    // vereify if pesquisador is already here
    if(true) {
      result = new Pesquisador;
      result.copyFrom(p);
      this.pesquisadores.push(p);
    }

    return result;
  }

  getPesquisadores(): Pesquisador[] {
    return this.pesquisadores;
  }
}