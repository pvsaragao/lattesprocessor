import request = require("request-promise");
import { closeServer } from '../lp-server';

var base_url = "http://localhost:3000/";

describe("O servidor", () => {
  var server:any;

  beforeAll(() => {server = require('../ta-server')});

  afterAll(() => {server.closeServer()});

  // add server tests here

  //Qualis

  it("Inicialmente a tabela está vazia", () => {

  })

  it("Cadastra uma planilha corretamente", () => {
    
  })

  it("Retorna a avaliação esperada de cada periódico", () => {
    
  })

  it("Limpa a tabela", () => {
    
  })

})