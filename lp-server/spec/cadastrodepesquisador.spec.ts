import { CadastroDePesquisadores } from '../cadastrodepesquisadores';
import { Pesquisador } from '../../common/pesquisador';
import { Publicacao } from '../../common/publicacao';

// IMPORTANT: Change from Publicação to pesquisador!

describe("O cadastro de publicacoes", () => {
  let cadastro: CadastroDePesquisadores;
  beforeEach(() => cadastro = new CadastroDePesquisadores());

  it("inicialmente está vazio", () => {
    expect(cadastro.getPesquisadores().length).toBe(0);
  })

  it("cadastra pesquisadores corretamente", () => {
    expect(cadastro.getPesquisadores().length).toBe(0);

    let p1 = new Pesquisador();
    p1.nome = "Marcio da Silva Costa";

    let publi1 = new Publicacao("Requisitos de software para modelo de cascata", "The Journal of Systems and Software");
    let publi2 = new Publicacao("A Magia do Software de Natal", "The Journal of Systems and Software");
    p1.publicacoes.push(publi1);
    p1.publicacoes.push(publi2);

    cadastro.addPesquisador(p1);

    expect(cadastro.getPesquisadores().length).toBe(1);
  })

  it("nao cadastra pesquisadores duplicados", () => {
    expect(cadastro.getPesquisadores().length).toBe(0);

    let p1 = new Pesquisador();
    p1.nome = "Marcio da Silva Costa";

    let publi_f1 = new Publicacao("Requisitos de software para modelo de cascata", "The Journal of Systems and Software");
    let publi_f2 = new Publicacao("A Magia do Software de Natal", "The Journal of Systems and Software");
    p1.publicacoes.push(publi_f1);
    p1.publicacoes.push(publi_f2);

    let p2 = new Pesquisador();
    p2.nome = "Marcio da Silva Costa";

    let publi_s1 = new Publicacao("The magic of pair programming", "The Journal of Systems and Software");
    let publi_s2 = new Publicacao("Why meetings go wrong and how to solve them", "The Journal of Systems and Software");
    p2.publicacoes.push(publi_s1);
    p2.publicacoes.push(publi_s2);

    cadastro.addPesquisador(p1);
    cadastro.addPesquisador(p2);

    expect(cadastro.getPesquisadores().length).toBe(1);
  })
})