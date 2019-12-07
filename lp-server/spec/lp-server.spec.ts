import request = require("request-promise");
import { closeServer } from '../lp-server';

const fs = require('fs');

var base_url = "http://localhost:3000/";

describe("O servidor", () => {
  var server:any;

  beforeAll(() => {server = require('../lp-server')});

  afterAll(() => {server.closeServer()});

  // add server tests here

  //Qualis

  it("Inicialmente a tabela está vazia", () => {
    return request.get(base_url + "qualis").then(body => expect(body).toBe("[]"))
                  .catch(e => expect(e).toBe(null));
  })

  it("Cadastra uma planilha corretamente", () => {
    let reader : FileReader;
    let data : string = fs.readFileSync('./spec/test.xls', 'binary');
    let qualisFile : File = new File([data], './spec/toSend.xls');
    let options : any = {method: 'POST', uri: (base_url + "qualis/adicionar"), file: qualisFile};
    return request(options).then(body => expect(body)
                  .toEqual({success : "planilha cadastrada com sucesso"}))
                          .catch(e => expect(e).toBe(null));
  })

  it("Retorna a avaliação esperada de cada periódico", () => {
    let options : any = {method: 'GET', uri: (base_url + "qualis/avaliacao"), params: {periodico: "BMC Genomics"}};
    return request(options).then(body => expect(body)
                  .toEqual({success : "B2"}))
                          .catch(e => expect(e).toBe(null));
  })

  it("Limpa a tabela", () => {
    return request.delete(base_url + "qualis/apagar").then(body => expect(body)
                  .toEqual({success : "Tabela qualis apagada"}))
                          .catch(e => expect(e).toBe(null));
  })

})