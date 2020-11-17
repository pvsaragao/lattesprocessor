import { Pesquisador } from '../../common/pesquisador';
import { Publicacao } from '../../common/publicacao';
import { Qualis } from '../../common/Qualis';
import { Relatorio } from '../../common/relatorio';
import { RelatorioFactory } from '../relatoriosFactory'

var qualis: Qualis[] = [];

function gerarRelatorio(p1: string, p2: string, p3: string, n1: string, n2: string, n3: string, n4: string, n5: string, n6: string, n7: string, n8: string, n9: string, n10: string,): Relatorio {
    var pesq1 = new Pesquisador();
    var pesq2 = new Pesquisador();
    var pesq3 = new Pesquisador();

    pesq1.nome = p1
    pesq2.nome = p2
    pesq3.nome = p3
    let a1 = "Publicacao A"
    let b1 = "Publicacao B"
    let c1 = "Publicacao C"
    let a2 = "Publicacao AAA"
    let b2 = "Publicacao BBB"
    let c2 = "Publicacao CCC"
    let a3 = "0001"
    let b3 = "0002"
    let c3 = "0003"
    let a4 = "Publicacao D"
    let b4 = "Publicacao E"
    let c4 = "Publicacao F"
    let a5 = "Publicacao DDD"
    let b5 = "Publicacao EEE"
    let c5 = "Publicacao FFF"
    let a6 = "0004"
    let b6 = "0005"
    let c6 = "0006"
    let a7 = "Publicacao G"
    let b7 = "Publicacao H"
    let c7 = "Publicacao I"
    let a8 = "Publicacao GGG"
    let b8 = "Publicacao HHH"
    let c8 = "Publicacao III"
    let a9 = "0007"
    let b9 = "0008"
    let c9 = "0009"
    let a10 = "Publicacao J"
    let b10 = "Publicacao JJJ"
    let c10 = "0010"
    let pesq1p1 = new Publicacao(a1, a2, a3);
    let pesq1p2 = new Publicacao(b1, b2, b3);
    let pesq1p3 = new Publicacao(c1, c2, c3);
    let pesq2p1 = new Publicacao(a4, a5, a6);
    let pesq2p2 = new Publicacao(b4, b5, b6);
    let pesq2p3 = new Publicacao(c4, c5, c6);
    let pesq3p1 = new Publicacao(a7, a8, a9);
    let pesq3p2 = new Publicacao(b7, b8, b9);
    let pesq3p3 = new Publicacao(c7, c8, c9);
    let pesq3p4 = new Publicacao(a10, b10, c10);
    pesq1.publicacoes.push(pesq1p1)
    pesq1.publicacoes.push(pesq1p2)
    pesq1.publicacoes.push(pesq1p3)
    pesq2.publicacoes.push(pesq2p1)
    pesq2.publicacoes.push(pesq2p2)
    pesq2.publicacoes.push(pesq2p3)
    pesq3.publicacoes.push(pesq3p1)
    pesq3.publicacoes.push(pesq3p2)
    pesq3.publicacoes.push(pesq3p3)
    pesq3.publicacoes.push(pesq3p4)

    var qualis: Qualis[] = [];
    let pesq1q1 = new Qualis("Publicacao A", 11, "Estudo", "0001", n1);
    let pesq1q2 = new Qualis("Publicacao B", 12, "Estudo", "0002", n2);
    let pesq1q3 = new Qualis("Publicacao C", 13, "Estudo", "0003", n3);
    let pesq2q1 = new Qualis("Publicacao D", 14, "Estudo", "0004", n4);
    let pesq2q2 = new Qualis("Publicacao E", 15, "Estudo", "0005", n5);
    let pesq2q3 = new Qualis("Publicacao F", 16, "Estudo", "0006", n6);
    let pesq3q1 = new Qualis("Publicacao G", 17, "Estudo", "0007", n7);
    let pesq3q2 = new Qualis("Publicacao H", 18, "Estudo", "0008", n8);
    let pesq3q3 = new Qualis("Publicacao I", 19, "Estudo", "0009", n9);
    let pesq3q4 = new Qualis("Publicacao J", 20, "Estudo", "0010", n10);
    /*pesq1q1.montar("Publicacao A", 11, "Estudo", "0001", n1)
    pesq1q2.montar("Publicacao B", 12, "Estudo", "0002", n2)
    pesq1q3.montar("Publicacao C", 13, "Estudo", "0003", n3)
    pesq2q1.montar("Publicacao D", 14, "Estudo", "0004", n4)
    pesq2q2.montar("Publicacao E", 15, "Estudo", "0005", n5)
    pesq2q3.montar("Publicacao F", 16, "Estudo", "0006", n6)
    pesq3q1.montar("Publicacao G", 17, "Estudo", "0007", n7)
    pesq3q2.montar("Publicacao H", 18, "Estudo", "0008", n8)
    pesq3q3.montar("Publicacao I", 19, "Estudo", "0009", n9)
    pesq3q4.montar("Publicacao J", 20, "Estudo", "0010", n10)*/
    qualis.push(pesq1q1)
    qualis.push(pesq1q2)
    qualis.push(pesq1q3)
    qualis.push(pesq2q1)
    qualis.push(pesq2q2)
    qualis.push(pesq2q3)
    qualis.push(pesq3q1)
    qualis.push(pesq3q2)
    qualis.push(pesq3q3)
    qualis.push(pesq3q4);

    var relatorio = new Relatorio();
    relatorio.pesquisadores.push(pesq1);
    relatorio.pesquisadores.push(pesq2);
    relatorio.pesquisadores.push(pesq3);



    return relatorio;
}


describe("A classe relatorioFactory", () => {
    var relatorios: RelatorioFactory;

    beforeEach(() => relatorios = new RelatorioFactory());

    it("inicializacao correta de uma nova factory", () => {
        expect(relatorios.relatorios.length).toBe(0);
        expect(relatorios.counter).toBe(0);
    })
    it("adicionando um relatorio corretamente", () => {
        let rela = gerarRelatorio("A", "B", "C", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1");
        relatorios.addRelatorio(rela, qualis);
        rela = null;
        expect(relatorios.relatorios[0]).not.toBe(null)
        expect(relatorios.relatorios.length).toBe(1)
        rela = gerarRelatorio("A", "B", "D", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1");
        relatorios.addRelatorio(rela, qualis);
        rela = null;

        expect(relatorios.relatorios[1]).not.toBe(null)
        expect(relatorios.relatorios.length).toBe(2)
        expect(relatorios.relatorios[0].id).toBe(0)
    })
    it("nao adicionar relatorio duplicado", () => {
        let rela = gerarRelatorio("A", "B", "C", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1");
        rela = relatorios.addRelatorio(rela, qualis);

        let rela1 = gerarRelatorio("A", "B", "D", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A2", "A1");
        rela1 = relatorios.addRelatorio(rela1, qualis);

        let rela5 = gerarRelatorio("A", "B", "D", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1");
        rela5 = relatorios.addRelatorio(rela5, qualis);

        let rela2 = gerarRelatorio("E", "F", "G", "A1", "A1", "A1", "A2", "A1", "A1", "A3", "A1", "A1", "A1");
        rela2 = relatorios.addRelatorio(rela2, qualis);

        let rela3 = gerarRelatorio("A", "B", "C", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1");
        rela3 = relatorios.addRelatorio(rela3, qualis);

        let rela4 = gerarRelatorio("A", "B", "D", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1");
        rela4 = relatorios.addRelatorio(rela4, qualis);



        expect(relatorios.relatorios.length).toBe(3)
        expect(relatorios.relatorios).toContain(rela)
        expect(relatorios.relatorios[0].id).toBe(0)
        expect(relatorios.relatorios).toContain(rela1)
        expect(relatorios.relatorios[1].id).toBe(1)
        expect(relatorios.relatorios).toContain(rela2)
        expect(relatorios.relatorios[2].id).toBe(2)

    })
    it("getRelatorio retornando corretamente", () => {
        let rela = gerarRelatorio("A", "B", "C", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1");
        rela = relatorios.addRelatorio(rela, qualis);

        let rela1 = gerarRelatorio("A", "B", "D", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A2", "A1");
        rela1 = relatorios.addRelatorio(rela1, qualis);

        let rela5 = gerarRelatorio("A", "B", "D", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1");
        rela5 = relatorios.addRelatorio(rela5, qualis);

        let rela2 = gerarRelatorio("E", "F", "G", "A1", "A1", "A1", "A2", "A1", "A1", "A3", "A1", "A1", "A1");
        rela2 = relatorios.addRelatorio(rela2, qualis);

        let rela3 = gerarRelatorio("A", "B", "C", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1");
        rela3 = relatorios.addRelatorio(rela3, qualis);

        let rela4 = gerarRelatorio("A", "B", "D", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1");
        rela4 = relatorios.addRelatorio(rela4, qualis);

        expect(relatorios.getRelatorios().length).toBe(3)
        expect(relatorios.getRelatorios()).toContain(rela)
        expect(relatorios.relatorios[0].id).toBe(0)
        expect(relatorios.getRelatorios()).toContain(rela1)
        expect(relatorios.relatorios[1].id).toBe(1)
        expect(relatorios.getRelatorios()).toContain(rela2)
        expect(relatorios.relatorios[2].id).toBe(2)
    })
    it("findRelatorio funcionando corretamente", () => {
        let rela = gerarRelatorio("A", "B", "C", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1");
        relatorios.addRelatorio(rela, qualis);

        let rela1 = gerarRelatorio("A", "B", "D", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A2", "A1");
        relatorios.addRelatorio(rela1, qualis);

        let rela2 = gerarRelatorio("E", "F", "G", "A1", "A1", "A1", "A2", "A1", "A1", "A3", "A1", "A1", "A1");
        relatorios.addRelatorio(rela2, qualis);

        expect(relatorios.findRelatorio(gerarRelatorio("E", "F", "G", "A1", "A1", "A1", "A2", "A1", "A1", "A3", "A1", "A1", "A1"))).not.toBe(undefined);
        expect(relatorios.findRelatorio(gerarRelatorio("A", "B", "D", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A2", "A1"))).not.toBe(undefined);
        expect(relatorios.findRelatorio(gerarRelatorio("A", "B", "C", "A1", "A1", "A1", "A2", "A1", "A1", "A3", "A1", "A1", "A1"))).not.toBe(undefined);
        expect(relatorios.findRelatorio(gerarRelatorio("DSA", "DAA", "C", "A1", "A1", "A1", "A2", "A1", "A1", "A3", "A1", "A1", "A1"))).toBe(undefined);
        expect(relatorios.findRelatorio(gerarRelatorio("ABC", "Bde", "C", "A1", "A1", "A1", "A2", "A1", "A1", "A3", "A1", "A1", "A1"))).toBe(undefined);
        expect(relatorios.findRelatorio(gerarRelatorio("ABC", "B", "CC", "A1", "A1", "A1", "A2", "A1", "A1", "A3", "A1", "A1", "A1"))).toBe(undefined);
        expect(relatorios.relatorios[0].id).toBe(0)
        expect(relatorios.relatorios[1].id).toBe(1)
        expect(relatorios.relatorios[2].id).toBe(2)

    })
    it("deletando relatorio corretamente", () => {
        let rela = gerarRelatorio("A", "B", "C", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1");
        rela = relatorios.addRelatorio(rela, qualis);

        let rela1 = gerarRelatorio("A", "B", "D", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A2", "A1");
        rela1 = relatorios.addRelatorio(rela1, qualis);

        let rela2 = gerarRelatorio("E", "F", "G", "A1", "A1", "A1", "A2", "A1", "A1", "A3", "A1", "A1", "A1");
        rela2 = relatorios.addRelatorio(rela2, qualis);

        relatorios.deleteRelatorio(1);

        expect(relatorios.getRelatorios().length).toBe(2);
        expect(relatorios.getRelatorios()).toContain(rela)
        expect(relatorios.getRelatorios()).toContain(rela2)
        expect(relatorios.getRelatorios()).not.toContain(rela1)
    })
    it("adicionando relatorio com data corretamente", () => {
        let rela = gerarRelatorio("A", "B", "C", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1");
        rela.dataFinal = 20;
        rela.dataInicial = 12;
        relatorios.addRelatorio(rela, qualis);
        rela = null;

        rela = gerarRelatorio("A", "B", "C", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1");
        rela.dataFinal = 20;
        rela.dataInicial = 12;
        relatorios.addRelatorio(rela, qualis);
        rela = null;

        rela = gerarRelatorio("A", "B", "C", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1");
        rela.dataFinal = 11;
        rela.dataInicial = 16;
        relatorios.addRelatorio(rela, qualis);
        rela = null;

        rela = gerarRelatorio("A", "B", "D", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1", "A1");
        rela.dataFinal = 11;
        rela.dataInicial = 16;
        relatorios.addRelatorio(rela, qualis);
        rela = null;

        expect(relatorios.relatorios.length).toBe(3)
        expect(relatorios.relatorios[0].id).toBe(0)
    })

})