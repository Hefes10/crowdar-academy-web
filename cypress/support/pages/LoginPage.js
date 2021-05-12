/// <reference types="cypress" />
import LoginLocators from '../../fixtures/locators/LoginLocators.json';
class LoginPage{

    visitarPagina = () => { 
        cy.visit('/login');
    };

    doLoginAdmin = (json) => { //realiza el login en la aplicacion de acuerdo a los datos cargados en el archivo "LoginAdminExample.json"
    cy.get(LoginLocators.inpUsernameLogin).type(json.username);
    cy.get(LoginLocators.inpPassLogin).type(json.pass);
    cy.get(LoginLocators.btnIniciarSesionLogin).click();
};
    doLogin = (json) => { //realiza el login en la aplicacion de acuerdo a los datos cargados en el archivo "LoginExample.json"
    cy.get(LoginLocators.inpUsernameLogin).type(json.username);
    cy.get(LoginLocators.inpPassLogin).type(json.pass);
    cy.get(LoginLocators.btnIniciarSesionLogin).click();
};
}

export default new LoginPage(); 
