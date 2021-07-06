describe("tickets", () => {
    beforeEach(() => cy.visit("https://ticketbox-backstopjs-tat.s3.eu-central-1.amazonaws.com/index.html"));
    
    it("Preenchendo os input fields", () => {
        cy.get("#first-name").type("Tiago");
        cy.get("#last-name").type("Ferreira");
        cy.get("#email").type("tiago@teste.com.br");

        //Escolhendo select \/
        cy.get("#ticket-quantity").select("2");

        //Escolhendo o radio button \/
        cy.get("#vip").check();

        //Escolhendo o radio button \/
        cy.get("#friend").check();
        cy.get("#publication").check();
        cy.get("#social-media").check();
        cy.get("#friend").uncheck();
        cy.get("#publication").uncheck();
        cy.get("#social-media").uncheck();
        cy.get("#friend").check();
        cy.get("#publication").check();
        cy.get("#social-media").check();

        cy.get("#requests").type("é nóix mano");
        cy.get("#agree").check(); 
        cy.get("#signature").type("O profeta");
    });
    

    it("has 'TICKET' header's heading", () => {});

    //beforeEach(() => cy.visit("https://www.drogasil.com.br/"));
    //it("has 'Farmacia online 24 horas Drogasil' header's heading", () => {});
});