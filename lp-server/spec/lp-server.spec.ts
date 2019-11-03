import request = require("request-promise");
import { closeServer } from "../lp-server.ts";

let base_url = "http://localhost:3000/";

describe("O servidor", () => {
    let server:any;
    
    beforeAll(() => {server = require("../lp-server")});

    afterAll(() => {server.closeServer()});

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

})