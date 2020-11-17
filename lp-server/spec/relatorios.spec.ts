import { Pesquisador } from '../../common/pesquisador';
import { Publicacao } from '../../common/publicacao';
import { Qualis } from '../../common/Qualis';
import { Relatorio } from '../../common/relatorio';




describe("A classe relatorio", () => {
    var relatorio: Relatorio;
    var pesq1 = new Pesquisador();
    var pesq2 = new Pesquisador();
    var pesq3 = new Pesquisador();


    beforeEach(() => relatorio = new Relatorio());

    function gerarRelatorio(): void {

        pesq1.nome = "Caio Fazio"
        pesq2.nome = "Paulo Borba"
        pesq3.nome = "Jana Ina"
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
        let pesq1q1 = new Qualis("Publicacao A", 11, "Estudo", "0001", "A1");
        let pesq1q2 = new Qualis("Publicacao B", 12, "Estudo", "0002", "A1");
        let pesq1q3 = new Qualis("Publicacao C", 13, "Estudo", "0003", "B4");
        let pesq2q1 = new Qualis("Publicacao D", 14, "Estudo", "0004", "A2");
        let pesq2q2 = new Qualis("Publicacao E", 15, "Estudo", "0005", "A2");
        let pesq2q3 = new Qualis("Publicacao F", 16, "Estudo", "0006", "A2");
        let pesq3q1 = new Qualis("Publicacao G", 17, "Estudo", "0007", "A3");
        let pesq3q2 = new Qualis("Publicacao H", 18, "Estudo", "0008", "A2");
        let pesq3q3 = new Qualis("Publicacao I", 19, "Estudo", "0009", "A2");
        let pesq3q4 = new Qualis("Publicacao J", 20, "Estudo", "0010", "A2");
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


        relatorio.pesquisadores.push(pesq1);
        relatorio.pesquisadores.push(pesq2);
        relatorio.pesquisadores.push(pesq3);
        relatorio.generate(qualis);
    }

    it("criação correta de um novo relatorio", () => {
        expect(relatorio.pesquisadores.length).toBe(0);
        expect(relatorio.maisPublicacoes.length).toBe(0);
        expect(relatorio.melhorMedia.length).toBe(0);
        expect(relatorio.maisPublicacoes.length).toBe(0);
        expect(relatorio.classificacao.length).toBe(0);
        expect(relatorio.dataFinal).toBe(null);
        expect(relatorio.dataInicial).toBe(null);

    })

    it("copyFrom correto de um relatorio", () => {
        gerarRelatorio();


        var newRelatorio = new Relatorio();
        newRelatorio.copyFrom(relatorio);
        expect(relatorio.pesquisadores.length).toBe(3)
        expect(newRelatorio.pesquisadores.length).toBe(relatorio.pesquisadores.length)
        expect(relatorio.pesquisadores[0]).toBe(newRelatorio.pesquisadores[0])
        expect(relatorio.pesquisadores[2]).toBe(newRelatorio.pesquisadores[2])
        /*var relatorioCopia = new Relatorio();
        relatorioCopia.nome = "Paulo";
        relatorio.copyFrom(relatorioCopia);

        expect(relatorio.nome).toBe(relatorioCopia.nome);*/
    })
    it("clone correto de um relatorio", () => {
        gerarRelatorio();



        var newRelatorio = relatorio.clone();
        expect(relatorio.pesquisadores.length).toBe(3)
        expect(newRelatorio.pesquisadores.length).toBe(relatorio.pesquisadores.length)
        expect(relatorio.pesquisadores[0]).toBe(newRelatorio.pesquisadores[0])
        expect(relatorio.pesquisadores[2]).toBe(newRelatorio.pesquisadores[2])
        /*var relatorioCopia = new Relatorio();
        relatorioCopia.nome = "Paulo";
        relatorio.copyFrom(relatorioCopia);

        expect(relatorio.nome).toBe(relatorioCopia.nome);*/
    })

    it("relatorio gerado corretamente", () => {
        gerarRelatorio();

        expect(relatorio.maisMaximas.length).toBe(1)
        expect(relatorio.melhorMedia.length).toBe(1)
        expect(relatorio.maisPublicacoes.length).toBe(1)
        expect(relatorio.melhorMedia[0]).toBe(pesq2);
        expect(relatorio.maisPublicacoes[0]).toBe(pesq3);
        expect(relatorio.maisMaximas[0]).toBe(pesq1)


    })
    it("relatorio com data gerado corretamente", () => {
        relatorio.dataInicial = 14;
        relatorio.dataFinal = 19;
        gerarRelatorio();


        expect(relatorio.maisMaximas.length).toBe(3)
        expect(relatorio.melhorMedia.length).toBe(1)
        expect(relatorio.maisPublicacoes.length).toBe(2)
        expect(relatorio.melhorMedia).toContain(pesq2);
        expect(relatorio.maisPublicacoes).toContain(pesq3);
        expect(relatorio.maisPublicacoes).toContain(pesq2);
        expect(relatorio.maisMaximas).toContain(pesq1);
        expect(relatorio.maisMaximas).toContain(pesq2);
        expect(relatorio.maisMaximas).toContain(pesq3);

    })
})