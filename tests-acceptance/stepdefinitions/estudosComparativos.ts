import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let mesmoNome = ((elem, nome) => elem.element(by.name('nomesProfessores')).getText().then(text => text == nome))
let mesmaQtd = ((elem, artigos) => elem.element(by.name('artigosProfessores')).getText().then(text => text == artigos))
let pAND = ((p,q) => p.then(a => q.then(b => a && b)))

defineSupportCode(function ({ Given, And, When, Then }) {
    Given(/^estou na página de “estudos comparativos”$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('LattesProcessor');
        await $("a[name='estudosComparativos']").click();
    });

    Given(/^o atributo “arquivo xml” está como “nenhum arquivo carregado”$/, async () => {
        var status_xml: ElementArrayFinder = element.all(by.name('status_xml'));
	    await expect(status_xml.text).to.eventually.equal('nenhum arquivo carregado');
    });

    When(/^eu seleciono a opção “quantidade de artigos”$/, async () => {
        await $("a[name='quantidade_de_artigos']").click();
    });

    Then(/^eu vejo uma mensagem informando que nenhum arquivo .xml foi carregado$/, async () => {
        await request(options)
              .then(body => 
                   expect(JSON.stringify(body)).to.equal(
                       '{"failure":"Nenhum arquivo .xml foi carregado"}'));
    });
    

}) 
