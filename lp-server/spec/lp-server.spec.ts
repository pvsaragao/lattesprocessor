import e = require("express");
import request = require("request-promise");
import { closeServer } from '../lp-server';
import { Relatorio } from '../../common/relatorio'
import { Pesquisador } from '../../common/pesquisador'
import { Publicacao } from '../../common/publicacao'
import { Qualis } from '../../common/Qualis'
import bodyParser = require("body-parser");

var base_url = "http://localhost:3000/";

function gerarRelatorio(p1: string, p2: string, p3: string, n1: string, n2: string, n3: string, n4: string, n5: string, n6: string, n7: string, n8: string, n9: string, n10: string, ai: number, af: number): Relatorio {
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
    relatorio.dataInicial = ai;
    relatorio.dataFinal = af;
    relatorio.pesquisadores.push(pesq1);
    relatorio.pesquisadores.push(pesq2);
    relatorio.pesquisadores.push(pesq3);
    relatorio.generate(qualis);
    



    return relatorio;
}
function montarRelatorio(p1: string, p2: string, p3: string): Relatorio {
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
    var relatorio = new Relatorio();
    relatorio.pesquisadores.push(pesq1);
    relatorio.pesquisadores.push(pesq2);
    relatorio.pesquisadores.push(pesq3);



    return relatorio;
}

describe("O servidor", () => {
    var server: any;

    beforeAll(() => { server = require('../lp-server') });

    afterAll(() => { server.closeServer() });

    it("inicialmente retorna uma lista de alunos vazia", () => {
        return request.get(base_url + "relatorios")
            .then(body =>
                
                expect(body).toBe("[]")
                
            )
            .catch(e =>
                expect(e).toEqual(null)
            );
    })

    it("cadastrar e gerar um relatorio corretamente", () => {
        var relatorio = montarRelatorio('Caio', 'Paulo', 'Pedro')
        var options: any = { method: 'POST', uri: (base_url + "relatorios"), body:relatorio, json: true };
        return request(options)
            .then(body =>{
                
                let temp: Relatorio = <Relatorio>body;
                let temp1 = new Relatorio;
                temp1.copyFrom(temp);
                let expected: Relatorio = gerarRelatorio('Caio', 'Paulo', 'Pedro', 'A1', 'A1', 'B4', 'A2', 'A2', 'A2', 'A3', 'A2', 'A2', 'A2', null, null);
                expected.id = 0;
                expect(JSON.stringify(temp1)).toEqual(JSON.stringify(expected))
                    relatorio = montarRelatorio('Caio', 'Paulo', 'Pedro')
                    relatorio.dataInicial = 11;
                    relatorio.dataFinal = 18;
                    var options: any = { method: 'POST', uri: (base_url + "relatorios"), body: relatorio, json: true };
                    return request(options)
                        .then(body => {
                            let temp: Relatorio = <Relatorio>body;

                            let temp1 = new Relatorio;
                            temp1.copyFrom(temp);
                            let expected: Relatorio = gerarRelatorio('Caio', 'Paulo', 'Pedro', 'A1', 'A1', 'B4', 'A2', 'A2', 'A2', 'A3', 'A2', 'A2', 'A2', 11, 18);
                            expected.id = 1;
                            expect(JSON.stringify(temp1)).toEqual(JSON.stringify(expected))
                        })
                })
                .catch(e => {
                expect(e).toEqual(null)
            }
            )
    });


    it("não cadastra relatorio duplicado", () => {
        var relatorio1 = montarRelatorio('Caio', 'Paulo', 'Pedro')
        
        var options: any = { method: 'POST', uri: (base_url + "relatorios"), body: relatorio1, json: true };
        return request(options)
            .then(body => {
                let expected: Relatorio = gerarRelatorio('Caio', 'Paulo', 'Pedro', 'A1', 'A1', 'B4', 'A2', 'A2', 'A2', 'A3', 'A2', 'A2', 'A2', null, null);
                expect(body).toEqual({ failure: "O relatorio ja foi gerado." });
                        return request.get(base_url + "relatorios")
                            .then(body => {
                                expect(JSON.parse(body).length).toBe(2);
                            });
                    
            })
            .catch(err => {
                expect(err).toEqual(null)
            });
    })
    it("deletar relatorio corretamente", () => {
        
        var relatorio1 = montarRelatorio('Dale', 'Dele', 'Doli')

        var options: any = { method: 'POST', uri: (base_url + "relatorios"), body: relatorio1, json: true };
        return request(options)
            .then(body => {
                var expected: Relatorio = gerarRelatorio('Dale', 'Dele', 'Doli', 'A1', 'A1', 'B4', 'A2', 'A2', 'A2', 'A3', 'A2', 'A2', 'A2', null, null);
                expected.id = 2;
                expect(JSON.stringify(body, null, 4)).toEqual(JSON.stringify(expected, null, 4))
                var relatorio2 = montarRelatorio('Xesque', 'Bresque', 'Vraulen')
                var options1: any = { method: 'POST', uri: (base_url + "relatorios"), body: relatorio2, json: true };
                return request(options1)
                    .then(body => {
                        var expected1: Relatorio = gerarRelatorio('Xesque', 'Bresque', 'Vraulen', 'A1', 'A1', 'B4', 'A2', 'A2', 'A2', 'A3', 'A2', 'A2', 'A2', null, null);
                        expected1.id = 3;
                        expect(JSON.stringify(body, null, 4)).toEqual(JSON.stringify(expected1, null, 4))
                        var relatorio3 = montarRelatorio('Pedro', 'Padre', 'Pedra')
                        var options2: any = { method: 'POST', uri: (base_url + "relatorios"), body: relatorio3, json: true };
                        return request(options2)
                            .then(body => {
                                var expected2: Relatorio = gerarRelatorio('Pedro', 'Padre', 'Pedra', 'A1', 'A1', 'B4', 'A2', 'A2', 'A2', 'A3', 'A2', 'A2', 'A2', null, null);
                                expected2.id = 4;
                                expect(JSON.stringify(body, null, 4)).toEqual(JSON.stringify(expected2, null, 4))
                                return request.delete(base_url + "relatorios/" + '3')
                                    .then(body => {
                                        expect(body).toEqual(JSON.stringify({ success: "O relatorio foi deletado com sucesso." }))
                                        return request.get(base_url + "relatorios")
                                            .then(body => {
                                                expect(JSON.parse(body).length).toBe(4)
                                                expect(body).toContain(JSON.stringify(expected));
                                                expect(body).not.toContain(JSON.stringify(expected1));
                                                expect(body).toContain(JSON.stringify(expected2));

                                            })
                                    })


                            })
                    })
            })
            

    })
    it("não deletar relatorio quando o ID passado não existe.", () => {
        var relatorio1 = montarRelatorio('Heitor', 'Paulo', 'Pedro')

        var options: any = { method: 'POST', uri: (base_url + "relatorios"), body: relatorio1, json: true };
        return request(options)
            .then( body => {
                var expected: Relatorio = gerarRelatorio('Heitor', 'Paulo', 'Pedro', 'A1', 'A1', 'B4', 'A2', 'A2', 'A2', 'A3', 'A2', 'A2', 'A2', null, null);
                expected.id = 5;
                expect(JSON.stringify(body, null, 4)).toEqual(JSON.stringify(expected, null, 4))
                var relatorio2 = montarRelatorio('Luan', 'Luna', 'Paula')
                var options1: any = { method: 'POST', uri: (base_url + "relatorios"), body: relatorio2, json: true };
                return request(options1)
                    .then( body => {
                        var expected1: Relatorio = gerarRelatorio('Luan', 'Luna', 'Paula', 'A1', 'A1', 'B4', 'A2', 'A2', 'A2', 'A3', 'A2', 'A2', 'A2', null, null);
                        expected1.id = 6;
                        expect(JSON.stringify(body, null, 4)).toEqual(JSON.stringify(expected1, null, 4))
                        var relatorio3 = montarRelatorio('Luana', 'BrUNO', 'Leo')
                        var options2: any = { method: 'POST', uri: (base_url + "relatorios"), body: relatorio3, json: true };
                        return request(options2)
                            .then ( body => {
                                var expected2: Relatorio = gerarRelatorio('Luana', 'BrUNO', 'Leo', 'A1', 'A1', 'B4', 'A2', 'A2', 'A2', 'A3', 'A2', 'A2', 'A2', null, null);
                                expected2.id = 7;
                                expect(JSON.stringify(body, null, 4)).toEqual(JSON.stringify(expected2, null, 4))
                                return request.delete(base_url + "relatorios/" + '8')
                                    .then(body => {
                                        expect(body).toEqual(JSON.stringify({ failure: "O relatorio nao pode ser deletado" }))
                                            return request.get(base_url + "relatorios")
                                                .then(body => {
                                                    expect(JSON.parse(body).length).toBe(7)
                                                    expect(body).toContain(JSON.stringify(expected));
                                                    expect(body).toContain(JSON.stringify(expected1));
                                                    expect(body).toContain(JSON.stringify(expected2));

                                                })
                                    })
                                
                                
                            })
                    })
            })
        
        


        

    })
    it("atualizar um relatorio", () => {
        var options: any = { method: 'PUT', uri: (base_url + "relatorios/7"), json: true };
        return request(options)
            .then(body => {

                let temp: Relatorio = <Relatorio>body;
                let temp1 = new Relatorio;
                temp1.copyFrom(temp);
                var expected2: Relatorio = gerarRelatorio('Luana', 'BrUNO', 'Leo', 'A1', 'A1', 'B4', 'A2', 'A2', 'A2', 'A3', 'A2', 'A2', 'A2', null, null);
                expected2.id = 7;
                expect(JSON.stringify(temp1)).toEqual(JSON.stringify(expected2))
            })
            .catch(e => {
                expect(e).toEqual(null)
            }
            )
    });
    it("não atualizar um relatorio quando ID passado não existe", () => {
        var options: any = { method: 'PUT', uri: (base_url + "relatorios/8"), json: true };
        return request(options)
            .then(body => {
                expect(body).toEqual({ failure: "O relatorio nao pode ser atualizado"})
            })
            .catch(e => {
                expect(e).toEqual(null)
            }
            )
    });


}) 