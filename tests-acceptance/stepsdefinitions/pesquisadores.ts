import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let xml2js = require('xml2js');
let fs = require('fs');
let path = require('path');

const getName = (xmlFile) => {
  let parser = new xml2js.Parser({ attrkey: "ATTR" });
  let xml_string = fs.readFileSync('./support-files/' + xmlFile, "utf8");

  parser.parseString(xml_string, (error: any, result: any) => {
    if (error === null) {
      // gets name from xml and sets on temporary pesquisador
      let name = result['CURRICULO-VITAE']['DADOS-GERAIS'][0].ATTR['NOME-COMPLETO'];
      return name;
    }
  });

  return null;
}

defineSupportCode(function ({ Given, When, Then }) {
  Given(/^eu estou na página de "Pesquisadores"$/, async () => {
    await browser.get("http://localhost:4200/");
    await expect(browser.getTitle()).to.eventually.equal('Lattes Processor');
    await $("a[name='importar-lattes']").click();
  })

  Given(/^não há pesquisadores cadastrados no sistema$/, async () => {
    var allpesquisadores: ElementArrayFinder = element.all(by.css('.pesquisador-nome'));
    await allpesquisadores;
    allpesquisadores.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
  })

  // Os proximos passos são garantidos pelos arquivos em /support_files
  Given(/^o arquivo "([^\"]*)" tem como pesquisador "([^\"]*)"$/, async (file, name) => {
    // nothing
    // expect(1).to.equal(1);
  })

  Given(/^o arquivo "([^\"]*)" tem as publicações "([^\"]*)" e "([^\"]*)"$/, async (file, p1, p2) => {
    // nothing
    expect(1).to.equal(1);
  })

  When(/^eu selecionar para fazer o upload do arquivo "([^\"]*)"$/, async (fileName) => {
    let fileDir = path.join(__dirname, '/support_files/' + <string>fileName)
    await $("input[name='file']").sendKeys(fileDir);
  });

  Then(/^eu vejo uma mensagem de "([^\"]*)" na tela$/, async (status) => {
    var el = element(by.css('.status-message'));
    await el;
    el.then(element => expect(Promise.resolve(element.getText())).to.eventually.contain(<string>status));
  });

  Then(/^o sistema tem o pesquisador "([^\"]*)"$/, async (pesquisador) => {
    var allpesquisadores: ElementArrayFinder = element.all(by.css('.pesquisador-nome'));
    await allpesquisadores;

    var p1 = allpesquisadores.filter(elem =>
      elem.getText().then(text => text === pesquisador));

    await p1;

    p1.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
  });

  Then(/^o pesquisador "([^\"]*)" tem as publicações "([^\"]*)" e "([^\"]*)"$/, async (pesquisador, p1, p2) => {
    var allpublicacoes: ElementArrayFinder = element.all(by.css(`li[parent='${pesquisador}'`));
    await allpublicacoes;

    var publi1 = allpublicacoes.filter(elem =>
      elem.getText().then(text => text === p1));
    await publi1;
    await publi1.then(elems => {
      expect(Promise.resolve(elems.length)).to.eventually.equal(1);
    });

    var publi2 = allpublicacoes.filter(elem =>
      elem.getText().then(text => text === p2));
    await publi2;
    await publi2.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
  });
})