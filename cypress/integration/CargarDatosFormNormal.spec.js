/// <reference types="cypress"/>

import LoginPage from "../support/pages/LoginPage";
import FormPage from "../support/pages/FormPage";

describe("Caso Prueba Crowdar Academy 2021 - Cargar Datos en Formulario", () => {
  beforeEach(() => {
    cy.fixture('examples/LoginExample.json').then((json) =>{
      LoginPage.visitarPagina();
      LoginPage.realizarLogin(json);
      FormPage.verificarPaginaFormulario();
    })
  });
  it("Cargar datos en formulario de practica", () => {
    cy.fixture('examples/DatosExample.json').then((json) =>{
      FormPage.cargarDatosForm(json);
    })
  });
});
