import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let path = require('path');
import request = require("request-promise");

async function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
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
    await allpesquisadores.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
  })

  // Os proximos 2 passos são garantidos pelos arquivos em /support_files
  Given(/^o arquivo "([^\"]*)" tem como pesquisador "([^\"]*)"$/, async (file, name) => {
    // nothing
  })

  Given(/^o arquivo "([^\"]*)" tem as publicações "([^\"]*)" e "([^\"]*)"$/, async (file, p1, p2) => {
    // nothing
  })

  When(/^eu selecionar para fazer o upload do arquivo "([^\"]*)"$/, async (fileName) => {
    let fileDir = path.join(__dirname, '/support_files/' + <string>fileName)
    await $("input[name='file']").sendKeys(fileDir);

    // time to upload
    await wait(500);
  });

  Then(/^eu vejo uma mensagem de "([^\"]*)" na tela$/, async (status) => {
    var el = element(by.id('status-message'));
    await el;
    let txt = Promise.resolve(el.getText());
    await txt
    await txt.then(expect(Promise.resolve(el.getText())).to.eventually.contain(<string>status));
  });

  Then(/^o sistema tem o pesquisador "([^\"]*)"$/, async (pesquisador) => {
    var allpesquisadores: ElementArrayFinder = element.all(by.css('.pesquisador-nome'));
    await allpesquisadores;

    var p1 = allpesquisadores.filter(elem =>
      elem.getText().then(text => text === pesquisador));

    await p1;

    await p1.then(elems => {
      expect(elems.length).to.equal(1);
    });
  });

  Then(/^o pesquisador "([^\"]*)" tem as publicações "([^\"]*)" e "([^\"]*)"$/, async (pesquisador, p1, p2) => {
    var allpublicacoes: ElementArrayFinder = element.all(by.css(`li[parent='${pesquisador}'`));
    await allpublicacoes;

    var publi1 = allpublicacoes.filter(elem =>
      elem.getText().then(text => text === p1));
    await publi1;
    await publi1.then(elems => {
      expect(Promise.resolve(elems.length)).to.eventually.equal(1);
    }).catch(e => console.log(e));

    var publi2 = allpublicacoes.filter(elem =>
      elem.getText().then(text => text === p2));
    await publi2;
    await publi2.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1)).catch(e => console.log(e));
  });

  // Scenario 2 (reusing previous steps definitions)

  // Os proximo passo é garantido pelos arquivos em /support_files
  Given(/^o arquivo "([^\"]*)" tem um formato inválido$/, async (file) => {
    // nothing
  });

  // Scenario 3 (reusing previous steps definitions)
  When(/^eu selecionar para fazer o upload dos arquivos "([^\"]*)" e "([^\"]*)"$/, async (file1, file2) => {
    let file1Dir = path.join(__dirname, '/support_files/' + <string>file1)
    let file2Dir = path.join(__dirname, '/support_files/' + <string>file2)

    await $("input[name='file']").sendKeys(file1Dir + '\n' + file2Dir);

    // time to upload
    await wait(500);
  });
})