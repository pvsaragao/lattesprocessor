//import { CadastroDeAlunos } from '../cadastrodealunos';
//import { Aluno } from '../../common/aluno';

describe("O estudo comparativo", () => {
    var estudo: EstudoComparativo;
  
    beforeEach(() => estudo = new EstudoComparativo())
  
    it("tem pesos decrescentes se não for especificado", () => {
      expect(estudo.a1).toBe(8);
      expect(estudo.a2).toBe(7);
      expect(estudo.b1).toBe(6);
      expect(estudo.b2).toBe(5);
      expect(estudo.b3).toBe(4);
      expect(estudo.b4).toBe(3);
      expect(estudo.b5).toBe(2);
      expect(estudo.c).toBe(1);
    })
  
  
  }) 