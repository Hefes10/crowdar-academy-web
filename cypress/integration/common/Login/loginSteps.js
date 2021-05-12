import {Given, When} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../../support/pages/LoginPage'
import HomePage from "../../../support/pages/HomePage";
import BookStorePage from "../../../support/pages/BookStorePage";

Given('Me logueo como usuario correctamente', () => {
    cy.fixture('examples/LoginExample.json').then((json) => {
        LoginPage.visitarPagina();
        LoginPage.doLogin(json);
       

    })
})

Given('Me logueo como admin correctamente', () => {
    cy.fixture('examples/LoginAdminExample.json').then((json) => {
        LoginPage.visitarPagina();
        LoginPage.doLoginAdmin(json);
       

    })
})


