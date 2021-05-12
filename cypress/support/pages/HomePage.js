
/// <reference types="cypress" />

import HomeLocators from "../../fixtures/locators/HomeLocators.json"

class HomePage{
    verificarHome = () => {
        cy.get(HomeLocators.tituloHome).should('be.visible');
        cy.get(HomeLocators.tituloHome).should('contain.text', 'Profile');
    }

    clickBotonBookStore = () => {
        //cy.wait(800);
        //cy.get(HomeLocators.btnGoToBookStore, {timeout:10000}).should('be.visible');
        //cy.get(HomeLocators.btnBookStore, {timeout:10000}).click({force: true});
        cy.get(HomeLocators.btnGoToBookStore).should('be.visible');
        cy.get(HomeLocators.btnBookStore).click({force: true});
    }

    clickBotonForm = () => {
        //cy.wait(800);
        //cy.get(HomeLocators.btnGoToForm, {timeout:10000}).should('be.visible');
        //cy.get(HomeLocators.btnPracticeForm, {timeout:10000}).click({force: true});
        cy.get(HomeLocators.btnGoToForm).should('be.visible');
        cy.get(HomeLocators.btnPracticeForm).click({force: true});
    }

}

export default new HomePage();