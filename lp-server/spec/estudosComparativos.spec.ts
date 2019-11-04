describe("O estudo comparativo", () => {
    var estudo: EstudoComparativo;
  
    beforeEach(() => estudo = new EstudoComparativo())
  
    it("Não aceita pesos negativos", () => {
      expect(estudo.setA1(-1)).toBe(false);
    })

    it("Não aceita letras como pesos", () => {
      expect(estudo.setC('j')).toBe(false);
    })
  
    it("Retorna pesos normalizados", () => {
      estudo.setA1(8)
      estudo.setA2(8)
      estudo.setB1(8)
      estudo.setB2(8)
      estudo.setB3(8)
      estudo.setB4(8)
      estudo.setB5(8)
      estudo.setC(8)
      expect(estudo.a1).toBe(1);
      expect(estudo.a2).toBe(1);
      expect(estudo.b1).toBe(1);
      expect(estudo.b2).toBe(1);
      expect(estudo.b3).toBe(1);
      expect(estudo.b4).toBe(1);
      expect(estudo.b5).toBe(1);
      expect(estudo.c).toBe(1);
    })
  
  }) 
