/// <reference types="cypress"/>
import FormLocators from "../../fixtures/locators/FormLocators.json";

class FormPage {
  visitarPagina = () =>{
    cy.visit('/automation-practice-form');
  }

  verificarPaginaFormulario = () => { //verifica que formulario de practica cargue correctamente
    //cy.get(FormLocators.title, {timeout:25000}).contains("Practice Form").should('be.visible');
    cy.get(FormLocators.title).contains("Practice Form").should('be.visible');
  };

  cargaDatosForm = (json) => { 
    cy.get(FormLocators.inpFirstName).type(json.FirstName);
    cy.get(FormLocators.inpLastName).type(json.LastName);
    cy.get(FormLocators.inpEmail).type(json.Email);
    cy.get(FormLocators.btnOtherGender).click();
    cy.get(FormLocators.inpMobile).type(json.Mobile);
  }

  envioDatosForm = () => { //envia datos ingresados a traves del boton azul "submit"
    cy.get(FormLocators.btnSubmit).click();
  };

  verificaDatosEnviadosOk = () => { //Verifica que los datos ingresados se enviaron correctamente
    cy.get(FormLocators.modalEnvioOk).contains("Thanks for submitting the form").should('be.visible');
  };

}

export default new FormPage();