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
    Given(/^que estou na página de pesquisadores$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('Lattes Processor');
        await $("a[name='pesquisadores']").click();
    });

    Given(/^o pesquisador "([^\"]*)" não está na lista de pesquisadores$/, async (name) => {
        /* IMPLEMENTAR DA MANEIRA CORRETA, USANDO O NOME DO PESQUISADOR */
    });

    When(/^eu seleciono a opção de upload escolhendo o arquivo "([^\"]*)"$/, async (fileName) => {
        var fileDir = path.join(__dirname, '/support/' + <string>fileName)
        await $("input[name='file']").sendKeys(fileDir);
        await wait(500);
    });

    Then(/^eu consigo ver o pesquisador "([^\"]*)" na lista de pesquisadores$/, async (name) => {
        var allpesquisadores: ElementArrayFinder = element.all(by.css('.nome'));
        await allpesquisadores;

        var p1 = allpesquisadores.filter(elem =>
            elem.getText().then(text => text === name));

        await p1;

        await p1.then(elems => {
            expect(elems.length).to.equal(1);
        });
    });
})
