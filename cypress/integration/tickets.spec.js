describe("tickets", () => {
    beforeEach(() => cy.visit("https://ticketbox-backstopjs-tat.s3.eu-central-1.amazonaws.com/index.html"));
    
    const usuario = {
        primeiroNome: "Tiago",
        ultimoNome:   "Ferreira",
        email:        "tia1go@teste.com.br",
        frase:        "é nóix mano",
        assinatura:   "O Profeta",
        
    };

  const dadosValidaTexto = {
      primeiroNome: "Tiago", 
      ultimoNome: "Ferreira",
      radio: "#general", 
      qtn: "1",
  };

  const outrosDados = {
    titulo:       "TICKETBOX",
    emailInvalido:"tiago----teste.com.br",
    email:        "asddadasdas@teste.com.br",
  }

    it("Validando preenchimento os input fields", () => {
        cy.preencheCamposTexto(usuario);
        cy.preencheCheckbox();
        cy.unCheckbox();
        cy.preencheCheckbox();
        cy.aceitaCheck();
    });

    // ESTÁ FAZENDO APENAS UMA VALIDAÇÃO
    it("Validando select, radio e texto", () => {
        cy.validaInformacoesDeTexto(dadosValidaTexto);  
    });

    it("Validando titulo", () => {
       cy.validarTitulo(outrosDados);
    });

    it("Validando email", () => {
       cy.validarEmail(outrosDados);
    });

    it("Validando campos obrigatórios e botão reset", () => {
        cy.botaoEnviarDisabled();
        cy.validaCamposObrigatorios(usuario);
        cy.botaoReset();
        cy.camposVazios();
    });

    //beforeEach(() => cy.visit("https://www.drogasil.com.br/"));
    //it("has 'Farmacia online 24 horas Drogasil' header's heading", () => {});
});