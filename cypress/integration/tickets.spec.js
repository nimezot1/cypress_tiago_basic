describe("tickets", () => {
    beforeEach(() => cy.visit("https://ticketbox-backstopjs-tat.s3.eu-central-1.amazonaws.com/index.html"));
    
    it("fills all the text input fields", () => {
        cy.get("#first-name").type("Tiago");
        cy.get("#last-name").type("Ferreira");
        cy.get("#email").type("tiago@teste.com.br");
        cy.get("#ticket-quantity").select("2");
        cy.get("#requests").type("é nóix mano");
        cy.get("#signature").type("O profeta");
    });
    

    it("has 'TICKET' header's heading", () => {});

    //beforeEach(() => cy.visit("https://www.drogasil.com.br/"));
    //it("has 'Farmacia online 24 horas Drogasil' header's heading", () => {});
});