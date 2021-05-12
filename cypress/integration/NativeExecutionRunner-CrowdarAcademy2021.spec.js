Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

describe("Login Crowdar Cypress Demo", () => {
    it("Login", () => {

        cy.visit("https://demoqa.com/login");

        var username = "Crowdar";
        var pass = "Crowdar2021*Academy";

        cy.get('#userName').type(username);
        cy.get('#password').type(pass+"{enter}");
                
        cy.get('.main-header').contains("Profile");

    });
});