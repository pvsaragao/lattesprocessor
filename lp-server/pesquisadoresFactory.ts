import { Pesquisador } from '../common/pesquisador';
import { Publicacao } from '../common/publicacao';
import { CadastroDePesquisadores } from './cadastroDePesquisadores';

let xml2js = require('xml2js');

export class PesquisadoresFactory {
    cadastroPesq: CadastroDePesquisadores;

    constructor(c: CadastroDePesquisadores) {
        this.cadastroPesq = c;
    }

    getEvent(e: any): Publicacao {
        let tituloPublicacao = e['DADOS-BASICOS-DO-TRABALHO'][0].ATTR['TITULO-DO-TRABALHO'];
        let periodico = e['DETALHAMENTO-DO-TRABALHO'][0].ATTR['NOME-DO-EVENTO'];
        let publicacao = new Publicacao(tituloPublicacao, periodico);
        return publicacao;
    }

    getArticle(a: any): Publicacao {
        let tituloPublicacao = a['DADOS-BASICOS-DO-ARTIGO'][0].ATTR['TITULO-DO-ARTIGO'];
        let periodico = a['DETALHAMENTO-DO-ARTIGO'][0].ATTR['TITULO-DO-PERIODICO-OU-REVISTA'];
        let publicacao = new Publicacao(tituloPublicacao, periodico);
        return publicacao;
    }

    getChapter(a: any): Publicacao {
        let tituloPublicacao = a['DADOS-BASICOS-DO-CAPITULO'][0].ATTR['TITULO-DO-CAPITULO-DO-LIVRO'];
        let periodico = a['DETALHAMENTO-DO-CAPITULO'][0].ATTR['TITULO-DO-LIVRO'];
        let publicacao = new Publicacao(tituloPublicacao, periodico);
        return publicacao;
    }

    importLattes(xml_string: string): Pesquisador {
        let resp = null;

        let parser = new xml2js.Parser({ attrkey: "ATTR" });
        parser.parseString(xml_string, (error: any, result: any) => {
            if (error === null) {
                try {
                    let tempPesquisador = new Pesquisador();

                    let name = result['CURRICULO-VITAE']['DADOS-GERAIS'][0].ATTR['NOME-COMPLETO'];
                    tempPesquisador.nome = name;

                    let bibliography = result['CURRICULO-VITAE']['PRODUCAO-BIBLIOGRAFICA'][0];
                    let events = bibliography['TRABALHOS-EM-EVENTOS'][0]['TRABALHO-EM-EVENTOS'];
                    let articles = bibliography['ARTIGOS-PUBLICADOS'][0]['ARTIGO-PUBLICADO'];
                    let chapters = bibliography['LIVROS-E-CAPITULOS'][0]['CAPITULOS-DE-LIVROS-PUBLICADOS'][0]['CAPITULO-DE-LIVRO-PUBLICADO'];

                    events.forEach((e: any) => {
                        tempPesquisador.addPublicacao(this.getEvent(e));
                    });

                    articles.forEach((a: any) => {
                        tempPesquisador.addPublicacao(this.getArticle(a));
                    });

                    chapters.forEach((c: any) => {
                        tempPesquisador.addPublicacao(this.getChapter(c));
                    });

                    resp = this.cadastroPesq.addPesquisador(tempPesquisador);
                } catch (error) {
                    console.log(error);
                    resp = null;
                }
            }
        });

        return resp;
    }
}