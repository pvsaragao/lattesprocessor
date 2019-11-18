import request = require("request-promise");
import { closeServer } from '../lp-server';

var base_url = "http://localhost:3000/";

describe("O servidor", () => {
  var server:any;

  beforeAll(() => {server = require('../lp-server')});

  afterAll(() => {server.closeServer()});

  it("inicialmente retorna um ranking vazio", () => {
    return request.get(base_url + "estudoscomparativos")
            .then(body => 
               expect(body).toBe("[]")
             )
            .catch(e => 
               expect(e).toEqual(null)
             );
  })

  it("inicialmente retorna uma lista de periodicos vazia", () => {
        return request.get(base_url + "qualis").then(body => expect(body).toBe("[]")).catch(e => expect(e).toEqual(null));
  })

  it("cadastra um periodico corretamente", () => {
        let periodico = {"json":{"nome":"Algorithms for Molecular Biology","avaliacao": "B1"}}
        let resposta = '{"nome":"Algorithms for Molecular Biology","avaliacao":"B1"}';
        return request.post(base_url + "periodico", periodico).then(body => {expect(body).toEqual({success:"O periodico foi cadastrado com sucesso"});
        return request.get(base_url + "qualis").then(body => expect(body).toBe(resposta)).catch(e => expect(e).toEqual(null));});
  })

  it("nao aceita duplicates", () => {
        let periodico = {"json":{"nome":"Algorithms for Molecular Biology","avaliacao": "A1"}}
        let resposta = '{"nome":"Algorithms for Molecular Biology","avaliacao":"B1"}';
        return request.post(base_url + "periodico", periodico).then(body => {expect(body).toEqual({failure:"O periodico não foi cadastrado com sucesso"});
        return request.get(base_url + "qualis").then(body => expect(body).toBe(resposta)).catch(e => expect(e).toEqual(null));});
  })

  it("inicialmente retorna uma lista de publicações vazia", () => {
    return request.get(base_url + "publications")
      .then(body =>
        expect(body).toBe("[]")
      )
      .catch(e =>
        expect(e).toEqual(null)
      );
  })

  it("ignora publicacoes duplicadas", () => {
    let publicacao = {"json":{
      "titulo": "Requisitos de software para modelo de cascata",
      "pesquisadores": [
        "Paulo Medeiros de Miranda Neto",
        "Márcio Aquino da Silva",
        "Arthur Henrique Aquino"
      ]
    }};

    let respostaInicial = `{
      "titulo": "Requisitos de software para modelo de cascata",
      "pesquisadores": [
        "Paulo Medeiros de Miranda Neto",
        "Márcio Aquino da Silva",
        "Arthur Henrique Aquino"
      ]
    }`;

    return request.post(base_url + "publications", publicacao).then(body => {
      expect(body).toEqual({ failure: "publicacao ja cadastrada" });
      return request.get(base_url + "publications").then(body => expect(body).toBe(respostaInicial)).catch(e => expect(e).toEqual(null));
    });
  })

  it("cadastra publicacoes corretamente", () => {
    let publicacao = {"json":{
      "titulo": "Requisitos de software para modelo de cascata",
      "pesquisadores": [
        "Paulo Medeiros de Miranda Neto",
        "Márcio Aquino da Silva",
        "Arthur Henrique Aquino"
      ]
    }};

    let resposta = `{
      "titulo": "Requisitos de software para modelo de cascata",
      "pesquisadores": [
        "Paulo Medeiros de Miranda Neto",
        "Márcio Aquino da Silva",
        "Arthur Henrique Aquino"
      ]
    }`;

    return request.post(base_url + "publications", publicacao).then(body => {
      expect(body).toEqual({ success: "publicacao cadastrada com sucesso" });
      return request.get(base_url + "publications").then(body => expect(body).toBe(resposta)).catch(e => expect(e).toEqual(null));
    });
  })

  it("retorna uma mensagem de erro ao tentar realizar raqueamento ser arquivos carregados", () => {
    var options:any = {method: 'POST', uri: (base_url + "rank"), body:{tipo: "por_numero_de_artigos"}, json: true};
    return request(options)
             .then(body =>
                expect(body).toEqual({failure: "Nenhum arquivo xml foi carregado"})
             ).catch(e =>
                expect(e).toEqual(null)
             )
  })

}) 
