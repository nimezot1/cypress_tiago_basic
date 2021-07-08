// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//const cypress = require("cypress")

Cypress.Commands.add("preencheCamposTexto", dados => {
    cy.get("#first-name").type(dados.primeiroNome);
    cy.get("#last-name").type(dados.ultimoNome);
    cy.get("#email").type(dados.email);
    cy.get("#requests").type(dados.frase);
    cy.get("#signature").type(dados.assinatura);
    //cy.get("#agree").check();
});

Cypress.Commands.add("preencheCheckbox", () => {
    cy.get("#friend").check();
    cy.get("#publication").check();
    cy.get("#social-media").check();
});

Cypress.Commands.add("unCheckbox", () => {
    cy.get("#friend").uncheck();
    cy.get("#publication").uncheck();
    cy.get("#social-media").uncheck();
});

Cypress.Commands.add("validaInformacoesDeTexto", dados => {
    cy.get("#first-name").type(dados.primeiroNome);
    cy.get("#last-name").type(dados.ultimoNome);

    cy.get(dados.radio).check();
    cy.get("#ticket-quantity").select(dados.qtn);
    
    const nomeInteiro = `${dados.primeiroNome} ${dados.ultimoNome}`;
    if (dados.radio == "#general") {
        if (dados.qtn != "1") {
            cy.get(".agreement p")
              .should("contain", `I, ${nomeInteiro}, wish to buy ${dados.qtn} General Admission tickets. I understand that all ticket sales are final.`);
        } else {
            cy.get(".agreement p")
              .should("contain", `I, ${nomeInteiro}, wish to buy 1 General Admission ticket. I understand that all ticket sales are final.`);
        }
    } else {
        if (dados.qtn != "1") {
            cy.get(".agreement p")
              .should("contain", `I, ${nomeInteiro}, wish to buy 2 VIP tickets. I understand that all ticket sales are final.`);
        } else {
            cy.get(".agreement p")
              .should("contain", `I, ${nomeInteiro}, wish to buy 1 VIP ticket. I understand that all ticket sales are final.`);
        } 
    }
});

Cypress.Commands.add("botaoEnviarDisabled", () => {
    cy.get("button[type='submit']").should("be.disabled");
});

Cypress.Commands.add("botaoEnviarEnabled", () => {
    cy.get("button[type='submit']").should("not.be.disabled");
});

Cypress.Commands.add("botaoReset", () =>{
    cy.get("button[type='reset']").click();
});

Cypress.Commands.add("validaCamposObrigatorios", dados => {
    cy.get("#first-name").type(dados.primeiroNome);
    cy.botaoEnviarDisabled();

    cy.get("#last-name").type(dados.ultimoNome);
    cy.botaoEnviarDisabled();

    cy.get("#email").type(dados.email);
    cy.botaoEnviarDisabled();

    cy.get("#requests").type(dados.frase);
    cy.botaoEnviarDisabled();

    cy.get("#signature").type(dados.assinatura);
    cy.botaoEnviarDisabled();

    cy.get("#friend").check();
    cy.botaoEnviarDisabled();

    cy.get("#publication").check();
    cy.botaoEnviarDisabled();

    cy.get("#social-media").check();
    cy.botaoEnviarDisabled();

    cy.get("#agree").check();
    cy.botaoEnviarEnabled();
});

Cypress.Commands.add("camposVazios", () =>{
    cy.get("#first-name").should('be.empty');
    cy.get("#last-name").should('be.empty');
    cy.get("#email").should('be.empty');
    cy.get("#friend").should('be.empty');
    cy.get("#publication").should('be.empty');
    cy.get("#social-media").should('be.empty');
    cy.get("#requests").should('be.empty');
    cy.get("#signature").should('be.empty');
    cy.get("#agree").should('be.empty');
});

Cypress.Commands.add("aceitaCheck", () =>{
    cy.get("#agree").check();
});

Cypress.Commands.add("validarTitulo", dados =>{
    cy.get("header h1").should("contain", dados.titulo);
});

Cypress.Commands.add("validarEmail", dados =>{
    cy.get("#email")
      .as("email")
      .type(dados.emailInvalido);

    cy.get("#email.invalid").should("exist");
    cy.get("@email")
      .clear()
      .type(dados.email);

    cy.get("#email.invalid").should("not.exist");
});