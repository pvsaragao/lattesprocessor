import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
import request = require("request-promise");
import { xlsReader } from '../../common/xlsReader';
import { Periodico } from '../../common/Periodico';

let base_url = "http://localhost:3000/";

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sameNome = ((elem, arr) => elem.element(by.name('allNomes')).getText().then(text => arr.includes(text)));
let sameAvaliacao = ((elem, arr) => elem.element(by.name('allAvaliacoes')).getText().then(text => arr.includes(text)));
let pAND = ((p, q) => p.then(a => q.then(b => a && b)));

defineSupportCode(function ({Given, When, Then}) {
    Given(/^Eu estou na página Qualis$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal("lattesprocessor");
        await $("a[name='qualis']").click();
    })

    Given(/^Nenhum periódico está armazenado no sistema$/, async () => {
        let allPeriodicos : ElementArrayFinder = element.all(by.name('allPeriodicos'));
        await allPeriodicos.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    })

    Given(/^O arquivo “([^\"]*)” contém: “([^\"]*)” com avaliação “([^\"]*)”, “([^\"]*)” com avaliação “([^\"]*)” e “([^\"]*)” com avaliação “([^\"]*)”$/, 
            async (file, periodico1, avaliacao1, periodico2, avaliacao2, periodico3, avaliacao3) => {
        let allPeriodicosInFile : Periodico[] = xlsReader.getPeriodicosFromXLS(file);
        await expect(allPeriodicosInFile.length).to.eventually.equal(3);
        await expect(allPeriodicosInFile[0].nome).to.eventually.equal(periodico1);
        await expect(allPeriodicosInFile[0].avaliacao).to.eventually.equal(avaliacao1);
        await expect(allPeriodicosInFile[1].nome).to.eventually.equal(periodico2);
        await expect(allPeriodicosInFile[1].avaliacao).to.eventually.equal(avaliacao2);
        await expect(allPeriodicosInFile[2].nome).to.eventually.equal(periodico3);
        await expect(allPeriodicosInFile[2].avaliacao).to.eventually.equal(avaliacao3);
    })

    When(/^Eu seleciono o arquivo “([^\"]*)"$/, async (file) => {
        await $("input[name=Files]").sendKeys(file);
    })

    When(/^Eu seleciono a opção Qualis Import$/, async () => {
        await element(by.buttonText('Qualis Import')).click();
    })

    Then(/^Eu vejo uma mensagem de sucesso$/, async () => {
        await element(by.name('ImportStatus')).getText().then(msg => expect(Promise.resolve(msg)).to.eventually.equal('success'))
    })

    Then(/^Eu vejo os periódicos “([^\"]*)” com avaliação “([^\"]*)”, “([^\"]*)” com avaliação “([^\"]*)” e “([^\"]*)” com avaliação “([^\"]*)”$/, 
            async(periodico1, avaliacao1, periodico2, avaliacao2, periodico3, avaliacao3) => {
        let periodicoArray = [periodico1, periodico2, periodico3];
        let avaliacaoArray = [avaliacao1, avaliacao2, avaliacao3];
        let allPeriodicos : ElementArrayFinder = element.all(by.name('allPeriodicos'));
        await allPeriodicos.filter(elem => pAND(sameNome(elem, periodicoArray), sameAvaliacao(elem, avaliacaoArray))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(3));
    })

    Given(/^Eu vejo o periódico “([^\"]*)” com avaliação “([^\"]*)”, que está em um arquivo “([^\"]*)” com somente este periódico$/, 
            async (periodico, avaliacao, file) => {
        await $("input[name=Files]").sendKeys(file);
        await element(by.buttonText('Qualis Import')).click();
        let periodicoArray = [periodico];
        let avaliacaoArray = [avaliacao];
        let allPeriodicos : ElementArrayFinder = element.all(by.name('allPeriodicos'));
        await allPeriodicos.filter(elem => pAND(sameNome(elem, periodicoArray), sameAvaliacao(elem, avaliacaoArray))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    })

    Given(/^O arquivo “([^\"]*)” contém: “([^\"]*)” com avaliação “([^\"]*)” e “([^\"]*)” com avaliação “([^\"]*)”$/, 
            async (file, periodico1, avaliacao1, periodico2, avaliacao2) => {
        let allPeriodicosInFile : Periodico[] = xlsReader.getPeriodicosFromXLS(file);
        await expect(allPeriodicosInFile.length).to.eventually.equal(2);
        await expect(allPeriodicosInFile[0].nome).to.eventually.equal(periodico1);
        await expect(allPeriodicosInFile[0].avaliacao).to.eventually.equal(avaliacao1);
        await expect(allPeriodicosInFile[1].nome).to.eventually.equal(periodico2);
        await expect(allPeriodicosInFile[1].avaliacao).to.eventually.equal(avaliacao2);
    })

    Given(/^O arquivo “([^\"]*)” contém: “([^\"]*)” com avaliação “([^\"]*)”$/, async(file, periodico, avaliacao) => {
        let allPeriodicosInFile : Periodico[] = xlsReader.getPeriodicosFromXLS(file);
        await expect(allPeriodicosInFile.length).to.eventually.equal(1);
        await expect(allPeriodicosInFile[0].nome).to.eventually.equal(periodico);
        await expect(allPeriodicosInFile[0].avaliacao).to.eventually.equal(avaliacao);
    })

    When(/^Eu seleciono o arquivo “([^\"]*)”$/, async(file) => {
        await $("input[name=Files]").sendKeys(file);
    })

    When(/^Eu seleciono o arquivo “([^\"]*)”$/, async(file) => {
        await $("input[name=Files]").sendKeys(file);
    })

    When(/^Eu seleciono a opção Qualis Import$/, async() => {
        await element(by.buttonText('Qualis Import')).click();
    })

    Then(/^Eu vejo uma mensagem de sucesso$/, async () => {
        await element(by.name('ImportStatus')).getText().then(msg => expect(Promise.resolve(msg)).to.eventually.equal('success'))
    })

    Then(/^Eu vejo os periódicos “([^\"]*)” com avaliação “([^\"]*)”, “([^\"]*)” com avaliação “([^\"]*)”, “([^\"]*)” com avaliação “([^\"]*)” e “([^\"]*)” com avaliação “([^\"]*)”$/, 
            async(periodico1, avaliacao1, periodico2, avaliacao2, periodico3, avaliacao3, periodico4, avaliacao4) => {
                let periodicoArray = [periodico1, periodico2, periodico3, periodico4];
                let avaliacaoArray = [avaliacao1, avaliacao2, avaliacao3, avaliacao4];
                let allPeriodicos : ElementArrayFinder = element.all(by.name('allPeriodicos'));
                await allPeriodicos.filter(elem => pAND(sameNome(elem, periodicoArray), sameAvaliacao(elem, avaliacaoArray)))
                    .then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(4));
    })
    
    Given(/^Eu vejo o periódico “([^\"]*)” com avaliação “([^\"]*)”, que está em um arquivo “([^\"]*)” com somente este periódico$/, 
            async (periodico, avaliacao, file) => {
        await $("input[name=Files]").sendKeys(file);
        await element(by.buttonText('Qualis Import')).click();
        let periodicoArray = [periodico];
        let avaliacaoArray = [avaliacao];
        let allPeriodicos : ElementArrayFinder = element.all(by.name('allPeriodicos'));
        await allPeriodicos.filter(elem => pAND(sameNome(elem, periodicoArray), sameAvaliacao(elem, avaliacaoArray)))
            .then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    })

    When(/^Eu seleciono o arquivo “([^\"]*)”$/, async(file) => {
        await $("input[name=Files]").sendKeys(file);
    })
    
    When(/^Eu seleciono a opção Qualis Import$/, async() => {
        await element(by.buttonText('Qualis Import')).click();
    })

    Then(/^Eu vejo uma mensagem de erro indicando o formato inválido do arquivo$/, async () => {
        await element(by.name('ImportStatus')).getText().then(msg => expect(Promise.resolve(msg)).to.eventually.equal('failure: not a xls'));
    })

    Then(/^Eu vejo o periódico “([^\"]*)” com avaliação “([^\"]*)”$/, async(periodico1, avaliacao1) => {
        let periodicoArray = [periodico1];
        let avaliacaoArray = [avaliacao1];
        let allPeriodicos : ElementArrayFinder = element.all(by.name('allPeriodicos'));
        await allPeriodicos.filter(elem => pAND(sameNome(elem, periodicoArray), sameAvaliacao(elem, avaliacaoArray)))
            .then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    })

    Given(/^Eu vejo o periódico “([^\"]*)” com avaliação “([^\"]*)”, que está em um arquivo “([^\"]*)” com somente este periódico$/, 
            async (periodico, avaliacao, file) => {
        await $("input[name=Files]").sendKeys(file);
        await element(by.buttonText('Qualis Import')).click();
        let periodicoArray = [periodico];
        let avaliacaoArray = [avaliacao];
        let allPeriodicos : ElementArrayFinder = element.all(by.name('allPeriodicos'));
        await allPeriodicos.filter(elem => pAND(sameNome(elem, periodicoArray), sameAvaliacao(elem, avaliacaoArray)))
            .then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    })

    Given(/^O arquivo “([^\"]*)” não contém nenhum Periódico$/, async(file) => {
        let allPeriodicosInFile : Periodico[] = xlsReader.getPeriodicosFromXLS(file);
        await expect(allPeriodicosInFile.length).to.eventually.equal(0);
    })

    When(/^Eu seleciono o arquivo “([^\"]*)”$/, async(file) => {
        await $("input[name=Files]").sendKeys(file);
    })
    
    When(/^Eu seleciono a opção Qualis Import$/, async() => {
        await element(by.buttonText('Qualis Import')).click();
    })

    Then(/^Eu vejo uma mensagem indicando que nenhum periódico foi importado ao sistema$/, async () => {
        await element(by.name('ImportStatus')).getText()
            .then(msg => expect(Promise.resolve(msg)).to.eventually.equal('alert: nenhum periodico novo importado'));
    })

    Then(/^Eu vejo o periódico “([^\"]*)” com avaliação “([^\"]*)”$/, async(periodico1, avaliacao1) => {
        let periodicoArray = [periodico1];
        let avaliacaoArray = [avaliacao1];
        let allPeriodicos : ElementArrayFinder = element.all(by.name('allPeriodicos'));
        await allPeriodicos.filter(elem => pAND(sameNome(elem, periodicoArray), sameAvaliacao(elem, avaliacaoArray)))
            .then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    })

})