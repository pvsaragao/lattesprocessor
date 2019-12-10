import request = require("request-promise");

const fs = require('fs');
let path = require('path');

var base_url = "http://localhost:3000/";

describe("O servidor", () => {
  var server: any;

  beforeAll(() => { server = require('../lp-server') });

  afterAll(() => { server.closeServer() });

  // add server tests here

  //Qualis

  // it("Inicialmente a tabela está vazia", () => {
  //   return request.get(base_url + "qualis").then(body => expect(body).toBe("[]"))
  //                 .catch(e => expect(e).toBe(null));
  // })

  // it("Cadastra uma planilha corretamente", () => {
  //   let filePath = path.join(__dirname, <string>'teste.xls');
  //   let data : string = fs.readFileSync('./spec/test.xls', 'binary');
  //   console.log(filePath);
  //   let qualisFile : File = new File([data],filePath);
  //   let options : any = {method: 'POST', uri: (base_url + "qualis/adicionar"), file: qualisFile};
  //   return request(options).then(body => expect(body)
  //                 .toEqual({success : "planilha cadastrada com sucesso"}))
  //                         .catch(e => expect(e).toBe(null));
  // })

  // it("Retorna a avaliação esperada de cada periódico", () => {
  //   let periodico : string = "BMC Genomics";
  //   let options : any = {method: 'POST', uri: (base_url + "qualis/avaliacao"), periodico};
  //   return request(options).then(body => expect(body)
  //                 .toEqual({success : "B2"}))
  //                         .catch(e => expect(e).toBe(null));
  // })

  // it("Limpa a tabela", () => {
  //   return request.delete(base_url + "qualis/apagar").then(body => expect(body)
  //                 .toEqual({success : "Tabela qualis apagada"}))
  //                         .catch(e => expect(e).toBe(null));
  
  it("inicialmente retorna uma lista de pesquisadores vazia", () => {
    return request.get(base_url + "pesquisadores")
      .then(body =>
        expect(body).toBe("[]")
      )
      .catch(e =>
        expect(e).toEqual(null)
      );
  })

  // Não consegui simular o envio de arquivos XML fazendo um post diretamente pelo node.

  // it("importa xmls corretamente", () => {
  //   let respostaInicial = `[{"nome":"Paulo Henrique Monteiro Borba","orgao":"","publicacoes":[{"titulo":"States as Specifications","periodico":"I Simp�sio Brasileiro de Linguagens de Programa��o (SBLP 1996)"},{"titulo":"From VDM Specifications To Functional Prototypes","periodico":"The Journal of Systems and Software"}]}]`;

  //   // Example of XML file
  //   let file_str = `<?xml version="1.0" encoding="ISO-8859-1" standalone="no" ?>
  //   <CURRICULO-VITAE SISTEMA-ORIGEM-XML="LATTES_OFFLINE" NUMERO-IDENTIFICADOR="9395715443254344" DATA-ATUALIZACAO="20102019" HORA-ATUALIZACAO="201158">
  //     <DADOS-GERAIS NOME-COMPLETO="Paulo Henrique Monteiro Borba" NOME-EM-CITACOES-BIBLIOGRAFICAS="BORBA, Paulo;BORBA, PAULO;Paulo H. M. Borba;Borba, Paulo H.M.;Paulo Borba;Borba, Paulo;Borba, P." NACIONALIDADE="B" PAIS-DE-NASCIMENTO="Brasil" UF-NASCIMENTO="PE" CIDADE-NASCIMENTO="Recife" PERMISSAO-DE-DIVULGACAO="NAO" DATA-FALECIMENTO="" SIGLA-PAIS-NACIONALIDADE="BRA" PAIS-DE-NACIONALIDADE="Brasil">
  //       <RESUMO-CV TEXTO-RESUMO-CV-RH="possui doutorado em Computa��o pela Universidade de Oxford, Inglaterra (1995), mestrado em Ci�ncia da Computa��o pela Universidade Federal de Pernambuco (1991), e gradua��o em Ci�ncia da Computa��o pela Universidade Federal de Pernambuco (1989). Atualmente � Professor Titular de Desenvolvimento de Software, na Universidade Federal de Pernambuco, e desenvolve pesquisas em Engenharia de Software e Linguagens de Programa��o, atuando principalmente nos seguintes temas e na integra��o entre eles: Modularidade de Software, Linhas de Produtos de Software, e Evolu��o e Transforma��o de Programas e Modelos." TEXTO-RESUMO-CV-RH-EN="bachelor's at Computer Science from Universidade Federal de Pernambuco (1989), master's at Computer Science from Universidade Federal de Pernambuco (1991) and doctorate at Computing from University of Oxford (1995). Has experience in Computer Science, focusing on Software Engeneering, acting on the following subjects: metodos formais, orientacao a objetos, linguagens funcionais, theorem proving and semantica operacional." />
  //     </DADOS-GERAIS>
  //     <PRODUCAO-BIBLIOGRAFICA>
  //       <ARTIGOS-PUBLICADOS>
  //         <ARTIGO-PUBLICADO SEQUENCIA-PRODUCAO="2" ORDEM-IMPORTANCIA="">
  //           <DADOS-BASICOS-DO-ARTIGO NATUREZA="COMPLETO" TITULO-DO-ARTIGO="From VDM Specifications To Functional Prototypes" ANO-DO-ARTIGO="1993" PAIS-DE-PUBLICACAO="" IDIOMA="Ingl�s" MEIO-DE-DIVULGACAO="IMPRESSO" HOME-PAGE-DO-TRABALHO="" FLAG-RELEVANCIA="NAO" DOI="10.1016/0164-1212(93)90028-V" TITULO-DO-ARTIGO-INGLES="" FLAG-DIVULGACAO-CIENTIFICA="NAO" />
  //           <DETALHAMENTO-DO-ARTIGO TITULO-DO-PERIODICO-OU-REVISTA="The Journal of Systems and Software" ISSN="01641212" VOLUME="21" FASCICULO="3" SERIE="" PAGINA-INICIAL="267" PAGINA-FINAL="278" LOCAL-DE-PUBLICACAO="USA" />
  //           <AUTORES NOME-COMPLETO-DO-AUTOR="Paulo Henrique Monteiro Borba" NOME-PARA-CITACAO="BORBA, Paulo;BORBA, PAULO;Paulo H. M. Borba;Borba, Paulo H.M.;Paulo Borba;Borba, Paulo;Borba, P." ORDEM-DE-AUTORIA="1" NRO-ID-CNPQ="9395715443254344" />
  //           <AUTORES NOME-COMPLETO-DO-AUTOR="S. R. L. MEIRA" NOME-PARA-CITACAO="MEIRA, S. R. L." ORDEM-DE-AUTORIA="2" NRO-ID-CNPQ="4973731190814126" />
  //           <PALAVRAS-CHAVE PALAVRA-CHAVE-1="Linguagem Funcional" PALAVRA-CHAVE-2="Metodos Formais" PALAVRA-CHAVE-3="Prototipagem" PALAVRA-CHAVE-4="" PALAVRA-CHAVE-5="" PALAVRA-CHAVE-6="" />
  //           <AREAS-DO-CONHECIMENTO>
  //             <AREA-DO-CONHECIMENTO-1 NOME-GRANDE-AREA-DO-CONHECIMENTO="CIENCIAS_EXATAS_E_DA_TERRA" NOME-DA-AREA-DO-CONHECIMENTO="" NOME-DA-SUB-AREA-DO-CONHECIMENTO="Metodologia e T�cnicas da Computa��o" NOME-DA-ESPECIALIDADE="Engenharia de Software" />
  //           </AREAS-DO-CONHECIMENTO>
  //           <SETORES-DE-ATIVIDADE SETOR-DE-ATIVIDADE-1="Inform�tica" SETOR-DE-ATIVIDADE-2="" SETOR-DE-ATIVIDADE-3="" />
  //         </ARTIGO-PUBLICADO>
  //       </ARTIGOS-PUBLICADOS>
  //       <TRABALHOS-EM-EVENTOS>
  //         <TRABALHO-EM-EVENTOS SEQUENCIA-PRODUCAO="4">
  //           <DADOS-BASICOS-DO-TRABALHO NATUREZA="COMPLETO" TITULO-DO-TRABALHO="States as Specifications" ANO-DO-TRABALHO="1996" PAIS-DO-EVENTO="Brasil" IDIOMA="Ingl�s" MEIO-DE-DIVULGACAO="IMPRESSO" HOME-PAGE-DO-TRABALHO="" FLAG-RELEVANCIA="NAO" DOI="" TITULO-DO-TRABALHO-INGLES="" FLAG-DIVULGACAO-CIENTIFICA="NAO" />
  //           <DETALHAMENTO-DO-TRABALHO CLASSIFICACAO-DO-EVENTO="NACIONAL" NOME-DO-EVENTO="I Simp�sio Brasileiro de Linguagens de Programa��o (SBLP 1996)" CIDADE-DO-EVENTO="" ANO-DE-REALIZACAO="" TITULO-DOS-ANAIS-OU-PROCEEDINGS="I Simp�sio Brasileiro de Linguagens de Programa��o (SBLP 1996)" VOLUME="" FASCICULO="" SERIE="" PAGINA-INICIAL="223" PAGINA-FINAL="236" ISBN="" NOME-DA-EDITORA="" CIDADE-DA-EDITORA="B. HORIZONTE, MINAS GERAIS" NOME-DO-EVENTO-INGLES="" />
  //           <AUTORES NOME-COMPLETO-DO-AUTOR="Paulo Henrique Monteiro Borba" NOME-PARA-CITACAO="BORBA, Paulo;BORBA, PAULO;Paulo H. M. Borba;Borba, Paulo H.M.;Paulo Borba;Borba, Paulo;Borba, P." ORDEM-DE-AUTORIA="1" NRO-ID-CNPQ="9395715443254344" />
  //           <PALAVRAS-CHAVE PALAVRA-CHAVE-1="Metodos Formais" PALAVRA-CHAVE-2="Orientacao A Objetos" PALAVRA-CHAVE-3="Semantica Operacional" PALAVRA-CHAVE-4="" PALAVRA-CHAVE-5="" PALAVRA-CHAVE-6="" />
  //           <AREAS-DO-CONHECIMENTO>
  //             <AREA-DO-CONHECIMENTO-1 NOME-GRANDE-AREA-DO-CONHECIMENTO="CIENCIAS_EXATAS_E_DA_TERRA" NOME-DA-AREA-DO-CONHECIMENTO="" NOME-DA-SUB-AREA-DO-CONHECIMENTO="Metodologia e T�cnicas da Computa��o" NOME-DA-ESPECIALIDADE="Engenharia de Software" />
  //           </AREAS-DO-CONHECIMENTO>
  //           <SETORES-DE-ATIVIDADE SETOR-DE-ATIVIDADE-1="Inform�tica" SETOR-DE-ATIVIDADE-2="" SETOR-DE-ATIVIDADE-3="" />
  //         </TRABALHO-EM-EVENTOS>
  //       </TRABALHOS-EM-EVENTOS>
  //     </PRODUCAO-BIBLIOGRAFICA>
  //   </CURRICULO-VITAE>`;

  //   // let bf = new Buffer(file_str);

  //   let formData = new FormData();
  //   formData.append('lattesFiles', file_str);

  //   return request.post({ url: base_url + "pesquisador/adicionar", formData: formData }).then(body => {
  //     expect(body).toEqual({ success: "arquivos foram importados com sucesso" });
  //     return request.get(base_url + "pesquisadores")
  //     .then(body =>
  //       expect(body).toBe(respostaInicial)
  //     )
  //     .catch(e =>
  //       expect(e).toEqual(null)
  //     );
  //   })

  // });

  // it("ignora pesquisadores duplicadas", () => {
  //   let pesquisador = {
  //     "json": {
  //       "nome": "Paulo Henrique Monteiro Borba",
  //       "orgao": "",
  //       "publicacoes": [
  //         {
  //           "titulo":"States as Specifications",
  //           "periodico":"I Simp�sio Brasileiro de Linguagens de Programa��o (SBLP 1996)"
  //         },
  //         {
  //           "titulo":"From VDM Specifications To Functional Prototypes",
  //           "periodico":"The Journal of Systems and Software"
  //         }
  //       ]
  //     }
  //   };

  //   let respostaInicial = `[{"nome":"Paulo Henrique Monteiro Borba","orgao":"","publicacoes":[{"titulo":"States as Specifications","periodico":"I Simp�sio Brasileiro de Linguagens de Programa��o (SBLP 1996)"},{"titulo":"From VDM Specifications To Functional Prototypes","periodico":"The Journal of Systems and Software"}]}]`;

  //   return request.post(base_url + "pesquisador/adicionar", pesquisador).then(body => {
  //     expect(body).toEqual({ failure: "publicacao ja cadastrada" });
  //     return request.get(base_url + "publications").then(body => expect(body).toBe(respostaInicial)).catch(e => expect(e).toEqual(null));
  //   });
  // })

  // it("cadastra pesquisadores corretamente", () => {

  //   let pesquisador = {
  //     "json": {
  //       "nome": "Paulo Henrique Monteiro Borba",
  //       "orgao": "",
  //       "publicacoes": [
  //         {
  //           "titulo":"States as Specifications",
  //           "periodico":"I Simp�sio Brasileiro de Linguagens de Programa��o (SBLP 1996)"
  //         },
  //         {
  //           "titulo":"From VDM Specifications To Functional Prototypes",
  //           "periodico":"The Journal of Systems and Software"
  //         }
  //       ]
  //     }
  //   };

  //   let resposta = `[{"nome":"Paulo Henrique Monteiro Borba","orgao":"","publicacoes":[{"titulo":"States as Specifications","periodico":"I Simp�sio Brasileiro de Linguagens de Programa��o (SBLP 1996)"},{"titulo":"From VDM Specifications To Functional Prototypes","periodico":"The Journal of Systems and Software"}]}]`;


  //   return request.post(base_url + "pesquisador/adicionar", pesquisador).then(body => {
  //     expect(body).toEqual({ success: "pesquisador cadastrado com sucesso" });
  //     return request.get(base_url + "pesquisadores").then(body => expect(body).toBe(resposta)).catch(e => expect(e).toEqual(null));
  //   });
  // })

})