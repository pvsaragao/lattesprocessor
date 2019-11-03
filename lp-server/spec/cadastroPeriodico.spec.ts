import { cadastroPeriodicos } from '../cadastroperiodicos.ts';
import { Periodico } from '../../common/periodico.ts';

describe("Importar qualis de periodicos com extensão xls", () => {
    let cadastro : cadastroPeriodicos;

    beforeEach(() => cadastro = new cadastroPeriodicos());

    it("é inicialmente vazio", () => {
        expect(cadastro.getPeriodicos().length).toBe(0);
    })

    it("cadastra periodicos corretamente", () => {
        let periodico : Periodico = new Periodico("Algorithms for Molecular Biology", "A1");
        cadastro.cadastrar(periodico);
        expect(cadastro.getPeriodicos().length).toBe(1);
        periodico = cadastro.getPeriodicos()[0];
        expect(periodico.nome).toBe("Algorithms for Molecular Biology");
        expect(periodico.avaliacao).toBe("A1");
    })

    it("Não aceita duplicates", () => {
        let periodico1 : Periodico = new Periodico("Algorithms for Molecular Biology", "B1");
        let periodico2 : Periodico = new Periodico("Algorithms for Molecular Biology", "A1");
        cadastro.cadastrar(periodico1);
        cadastro.cadastrar(periodico2);
        expect(cadastro.getPeriodicos().length).toBe(1);
        let periodico = cadastro.getPeriodicos()[0];
        expect(periodico.nome).toBe("Algorithms for Molecular Biology");
        expect(periodico.avaliacao).toBe("B1");
    })

})