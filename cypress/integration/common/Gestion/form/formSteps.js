import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
import HomePage from "../../../../support/pages/HomePage";
import FormPage from "../../../../support/pages/FormPage";


When('Ingreso al apartado formulario de practica', () => {
    HomePage.clickBotonForm();
})

And('Cargo datos obligatorios requeridos', () => {
    cy.fixture('examples/DatosExample.json').then((json) => {
        FormPage.cargaDatosForm(json);
    })
})

And('Envio datos de formulario', () => {
    FormPage.envioDatosForm();
})

And('Verifico que los datos se hayan enviado correctamente', () => {
    FormPage.verificaDatosEnviadosOk();
})