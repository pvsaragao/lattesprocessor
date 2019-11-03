import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let mesmoNome = ((elem, nome) => elem.element(by.name('nomesProfessores')).getText().then(text => text == nome))
let mesmaQtd = ((elem, artigos) => elem.element(by.name('artigosProfessores')).getText().then(text => text == artigos))
let pAND = ((p,q) => p.then(a => q.then(b => a && b)))

defineSupportCode(function ({ Given, And, When, Then }) {
    Given(/^Eu estou na página “Estudos Comparativos” $/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('LattesProcessor');
        await $("a[name='estudosComparativos']").click();
    });

    And(/^O professor "([^\"]*)" tem "(\d*)" artigos e o professor "([^\"]*)" tem "(\d*)" artigos”$/, async (prof1, qtd1, prof2, qtd2) => {
        var profs: ElementArrayFinder = element.all(by.name('professores'));
        await profs.filter(elem => pAND(mesmoNome(elem, prof1), mesmaQtd(elem, qtd1))).then
                    (elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1))
        await profs.filter(elem => pAND(mesmoNome(elem, prof2), mesmaQtd(elem, qtd2))).then
                    (elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1))
    });

    And(/^Eu escolho o método “quantidade de artigos””$/, async () => {
        await $("input[name='CriteriosPersonalizados'").click();
    });

    When(/^Eu gero o ranking$/, async () => {
        await $("button[name='gerarRanking']").click();
    });

    Then(/^"([^\"]*)" fica na primeira linha com "(\d*)" artigos e "([^\"]*)" na segunda com "(\d*)" artigos.$/, async (prof1, qtd1, prof2, qtd2) => {
        var lista: ElementArrayFinder = element.all(by.name('listaProfs'));
        await expect(lista[0].nome.to.eventually.equal(prof1));
        await expect(lista[0].qtd.to.eventually.equal(qtd1));
        await expect(lista[1].nome.to.eventually.equal(prof2));
        await expect(lista[1].qtd.to.eventually.equal(qtd2));
    });

}) 