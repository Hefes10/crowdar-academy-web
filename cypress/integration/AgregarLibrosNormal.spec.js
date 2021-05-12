/// <reference types="cypress"/>

import LoginPage from "../support/pages/LoginPage";
import BookStorePage from "../support/pages/BookStorePage";

describe("Caso Prueba Crowdar Academy 2021 - Agregar Libros", () => {
  beforeEach(() => {
    cy.fixture('examples/LoginExample.json').then((json) =>{
      LoginPage.visitarPagina();
      LoginPage.realizarLogin(json);
      BookStorePage.verificarPaginaBookStore();
    })
  });
  it("Agregar libro a la biblioteca de usuario", () => {
    cy.fixture().then(() =>{
      BookStorePage.clickAgregarPrimerLibro();
    })
  });
});
