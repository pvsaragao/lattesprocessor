import request = require("request-promise");
import { closeServer } from '../lp-server';

var base_url = "http://localhost:3000/";

describe("O servidor", () => {
  var server:any;

  //um novo servidor para cada teste
  beforeAll(() => {server = require('../lp-server')});
  afterAll(() => {server.closeServer()});

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
