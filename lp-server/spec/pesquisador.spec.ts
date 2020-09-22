import { Pesquisador } from '../../common/pesquisador';
import { Publicacao } from '../../common/publicacao';

describe("A classe Pesquisador", () => {
    let pesquisador: Pesquisador;

    beforeEach(() => pesquisador = new Pesquisador());

    it("criação correta de um novo pesquisador", () => {
        expect(pesquisador.nome).toBe("");
        expect(pesquisador.publicacoes.length).toBe(0);
    })

    it("copyFrom correto de um pesquisador", () => {
        expect(pesquisador.nome).toBe("");
        expect(pesquisador.publicacoes.length).toBe(0);

        const pesquisadorCopia = new Pesquisador();
        pesquisadorCopia.nome = "Paulo";
        pesquisador.copyFrom(pesquisadorCopia);

        expect(pesquisador.nome).toBe(pesquisadorCopia.nome);
    })

    it("addPublicacao correto de um pesquisador", () => {
        expect(pesquisador.nome).toBe("");
        expect(pesquisador.publicacoes.length).toBe(0);

        const publicacao = new Publicacao("Implementing distribution and persistence aspects with AspectJ", "ACM SIGPLAN Notices", "15232867");
        pesquisador.addPublicacao(publicacao);

        const temp = pesquisador.publicacoes;
        expect(temp[0].titulo).toBe("Implementing distribution and persistence aspects with AspectJ");
        expect(temp[0].periodico).toBe("ACM SIGPLAN Notices");
        expect(temp[0].issn).toBe("15232867");
    })
})
