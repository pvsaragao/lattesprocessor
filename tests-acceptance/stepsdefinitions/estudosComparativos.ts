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

    And(/^O professor "([^\"]*)" tem "(\d*)" artigos “([^\"]*)”, "(\d*)" artigos “([^\"]*)” e "(\d*)" artigo “([^\"]*)”$/, async (prof, qtd1, peso1, qtd2, peso2, qtd3, peso3) => {
        
    });

    And(/^Eu escolho o método “critérios de avaliação personalizados”$/, async () => {
        await $("input[name='CriteriosPersonalizados'").click();
    });

    And(/^And eu atribuo os pesos "(\d*)", "(\d*)", "(\d*)", "(\d*)", "(\d*)", "(\d*)", "(\d*)", "(\d*)", respectivamente. $/, async(A1, A2, B1, B2, B3, B4, B5, C) => {
        await $("input[name='a1']").sendKeys(A1);
        await $("input[name='a2']").sendKeys(A2);
        await $("input[name='b1']").sendKeys(B1);
        await $("input[name='b2']").sendKeys(B2);
        await $("input[name='b3']").sendKeys(B3);
        await $("input[name='b4']").sendKeys(B4);
        await $("input[name='b5']").sendKeys(B5);
        await $("input[name='c']").sendKeys(C);
    });

    Then(/^"([^\"]*)" fica na primeira linha com "(\d*)" pontos e "([^\"]*)" na segunda com "(\d*)" pontos, por ordem de prioridade.$/, async (prof1, pontos1, prof2, pontos2) => {
        
    });

    Given(/^o atributo “arquivo xml” está como “nenhum arquivo carregado”$/, async () => {
        var status_xml: ElementArrayFinder = element.all(by.name('status_xml'));
	    await expect(status_xml.text).to.eventually.equal('nenhum arquivo carregado');
    });

    Then(/^eu vejo uma mensagem informando que nenhum arquivo .xml foi carregado$/, async () => {
        await request(options)
              .then(body => 
                   expect(JSON.stringify(body)).to.equal(
                       '{"failure":"Nenhum arquivo .xml foi carregado"}'));
    });

    Given(/^"2" arquivos .xml contendo "([^\"]*)" com "(\d*)" artigos e "([^\"]*)" com "(\d*)" artigos$/, async (prof1,qtd1,prof2,qtd2) => {
        var status_xml: ElementArrayFinder = element.all(by.name('status_xml'));
        await expect(status_xml[0].text).to.eventually.equal('2 arquivos carregados');
        var professor_list: ElementArrayFinder = element.all(by.name('professores'));
        await professor_list.filter(elem => pAND(mesmoNome(elem, prof1), mesmaQtd(elem, qtd1))).then
                    (elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1))
        await professor_list.filter(elem => pAND(mesmoNome(elem, prof2), mesmaQtd(elem, qtd2))).then
                    (elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1))
    });

    Then(/^eu vejo uma tabela de ranking, onde "([^\"]*)" com "(\d*)" artigos está acima de "([^\"]*)" com "(\d*)" artigos$/, async (prof1,qtd1,prof2,qtd2) => {
        var rank_list: ElementArrayFinder = element.all(by.name('rank_list'));
        await expect(Promise.resolve(rank_list[0].nome)).to.eventually.equal(prof1)
        await expect(Promise.resolve(rank_list[1].nome)).to.eventually.equal(prof2)
        await expect(Promise.resolve(rank_list[0].qtd)).to.eventually.equal(qtd1)
        await expect(Promise.resolve(rank_list[1].qtd)).to.eventually.equal(qtd2)
        
    });

    Given(/^o atributo “arquivo xml” está como "([^\"]*)"$/, async (xml_file) => {
        var status_xml: ElementArrayFinder = element.all(by.name('status_xml'));
	    await expect(status_xml.text).to.eventually.equal(xml_file);
    });

    
    Given(/^eu posso ver "(\d+)" artigos do departamento "([^\"]*)" e "(\d+)" artigos do departamento "([^\"]*)"$/, async (qtd1,dpt1,qtd2,dpt2) => {
        var dpts: ElementArrayFinder = element.all(by.name('dpt'));
        await expect(Promise.resolve(dpts[0].nome)).to.eventually.equal(dpt1)
        await expect(Promise.resolve(dpts[1].nome)).to.eventually.equal(dpt2)
        await expect(Promise.resolve(dpts[0].qtd)).to.eventually.equal(qtd1)
        await expect(Promise.resolve(dpts[1].qtd)).to.eventually.equal(qtd2)
    });
    
    When(/^ eu seleciono a opção “ranqueamento de departamentos”$/, async () => {
        await $("a[name='raqueamento de departamentos']").click();
    });
    
    Then(/^eu vejo uma tabela com o ranking onde "([^\"]*)" com "(\d+)" artigos está acima de "([^\"]*)" com "(\d+)" artigos$/, async (dpt1,qtd1,dpt2,qtd2) => {
        var rank_list: ElementArrayFinder = element.all(by.name('rank_list'));
        await expect(Promise.resolve(rank_list[0].nome)).to.eventually.equal(dpt1)
        await expect(Promise.resolve(rank_list[1].nome)).to.eventually.equal(dpt2)
        await expect(Promise.resolve(rank_list[0].qtd)).to.eventually.equal(qtd1)
        await expect(Promise.resolve(rank_list[1].qtd)).to.eventually.equal(qtd2)
        
    });

}) 