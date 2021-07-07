describe("tickets", () => {
    beforeEach(() => cy.visit("https://ticketbox-backstopjs-tat.s3.eu-central-1.amazonaws.com/index.html"));
    
    const usuario = {
        primeiroNome: "Jose",
        ultimoNome:   "João",
        email:        "josejoao@teste.com.br",
    };

    const titulo = "TICKETBOX";
    const primeiro_Nome = "Tiago";
    const ultimo_Nome = "Ferreira";
    const nomeInteiro = `${primeiro_Nome} ${ultimo_Nome}`;
    const email = "tiago@teste.com.br";
    const emailInvalido = "tiago----teste.com.br";
    const frase = "é nóix mano";
    const assinatura = "O Profeta";

    it("Validando preenchimento os input fields", () => {
        cy.get("#first-name")
          .type(primeiro_Nome);
        
        cy.get("#last-name")
          .type(ultimo_Nome);

        cy.get("#email")
          .type(email);

        //Escolhendo o checkbox \/
        cy.get("#friend")
          .check();

        cy.get("#publication")
          .check();

        cy.get("#social-media")
          .check();

        cy.get("#friend")
          .uncheck();

        cy.get("#publication")
          .uncheck();

        cy.get("#social-media")
          .uncheck();

        cy.get("#friend")
          .check();

        cy.get("#publication")
          .check();

        cy.get("#social-media")
          .check();

        cy.get("#requests")
          .type(frase);

        cy.get("#agree")
          .check(); 

        cy.get("#signature")
          .type(assinatura);
    });

    it("Validando select, radio e texto", () => {
        cy.get("#first-name")
          .type(primeiro_Nome);

        cy.get("#last-name")
          .type(ultimo_Nome);
        
        //Escolhendo select  1 com radio button GENERAL \/
        cy.get("#general")
         .check();

        cy.get("#ticket-quantity")
          .select("1");
        cy.get(".agreement p")
          .should("contain", `I, ${nomeInteiro}, wish to buy 1 General Admission ticket. I understand that all ticket sales are final.`);
  
        cy.get("#ticket-quantity")
          .select("2");
        cy.get(".agreement p")
          .should("contain", `I, ${nomeInteiro}, wish to buy 2 General Admission tickets. I understand that all ticket sales are final.`);
          
        cy.get("#ticket-quantity")
          .select("3");
        cy.get(".agreement p")
          .should("contain", `I, ${nomeInteiro}, wish to buy 3 General Admission tickets. I understand that all ticket sales are final.`);
  
        cy.get("#ticket-quantity")
          .select("4");
        cy.get(".agreement p")
          .should("contain", `I, ${nomeInteiro}, wish to buy 4 General Admission tickets. I understand that all ticket sales are final.`);
  

        //Escolhendo select  1 com radio button VIP \/
        cy.get("#vip")
         .check();

        cy.get("#ticket-quantity")
          .select("1");
        cy.get(".agreement p")
          .should("contain", `I, ${nomeInteiro}, wish to buy 1 VIP ticket. I understand that all ticket sales are final.`);
  
        cy.get("#ticket-quantity")
          .select("2");
        cy.get(".agreement p")
          .should("contain", `I, ${nomeInteiro}, wish to buy 2 VIP tickets. I understand that all ticket sales are final.`);
          
        cy.get("#ticket-quantity")
          .select("3");
        cy.get(".agreement p")
          .should("contain", `I, ${nomeInteiro}, wish to buy 3 VIP tickets. I understand that all ticket sales are final.`);
  
        cy.get("#ticket-quantity")
          .select("4");
        cy.get(".agreement p")
          .should("contain", `I, ${nomeInteiro}, wish to buy 4 VIP tickets. I understand that all ticket sales are final.`);
        
    });

    it("Validando titulo", () => {
        cy.get("header h1")
          .should("contain", titulo);
    });

    it("Validando email invalido", () => {
        cy.get("#email")
          .as("email")
          .type(emailInvalido);

        cy.get("#email.invalid")
          .should("exist");
        
        cy.get("@email")
        .clear()
          .type(email);

        cy.get("#email.invalid")
          .should("not.exist");
    });

    it ("Validando campos obrigatórios e botão reset", () => {
        //validação dos campos obrigatórios
        cy.get("button[type='submit']")
          .as("botaoEnviar")
          .should("be.disabled");

        cy.get("#first-name")
          .type(primeiro_Nome);
        cy.get("@botaoEnviar")
          .should("be.disabled");

        cy.get("#last-name")
          .type(ultimo_Nome);
        cy.get("@botaoEnviar")
          .should("be.disabled");
          
        cy.get("#email")
          .type(email);
        cy.get("@botaoEnviar")
          .should("be.disabled");

        cy.get("#friend")
          .check();
        cy.get("@botaoEnviar")
          .should("be.disabled");

        cy.get("#publication")
          .check();
        cy.get("@botaoEnviar")
          .should("be.disabled");

        cy.get("#social-media")
          .check();
        cy.get("@botaoEnviar")
          .should("be.disabled");
          
        cy.get("#requests")
          .type(frase);
        cy.get("@botaoEnviar")
          .should("be.disabled");

        cy.get("#signature")
          .type(assinatura);
        cy.get("@botaoEnviar")
          .should("be.disabled");

        cy.get("#agree")
          .check();
        cy.get("@botaoEnviar")
          .should("not.be.disabled");
        
        //validação do botão reset
        cy.get("button[type='reset']")
          .click();

        cy.get("#first-name")
          .should('be.empty');

        cy.get("#last-name")
          .should('be.empty');

        cy.get("#email")
          .should('be.empty');

        cy.get("#friend")
          .should('be.empty');
          
        cy.get("#publication")
          .should('be.empty');

        cy.get("#social-media")
          .should('be.empty');

        cy.get("#requests")
          .should('be.empty');

        cy.get("#signature")
          .should('be.empty');

        cy.get("#agree")
          .should('be.empty');
    });

    it("Validando Comandos", () => {

        cy.testeFields(usuario);

        cy.get("button[type='submit']")
          .as("botaoEnviar")
          .should("not.be.disabled");

        cy.get("button[type='reset']").click();

        cy.get("@botaoEnviar").should("be.disabled");
    });

    //beforeEach(() => cy.visit("https://www.drogasil.com.br/"));
    //it("has 'Farmacia online 24 horas Drogasil' header's heading", () => {});
});