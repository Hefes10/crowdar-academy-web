/// <reference types="cypress"/>
import BookStoreLocators from "../../fixtures/locators/BookStoreLocators.json";

class BookStorePage {
  visitarPagina = () =>{
    cy.visit('/books');
  }

  verificarPaginaBookStore = () => { //verifica que la pagina Book Store cargue correctamente
    cy.get(BookStoreLocators.bookStoreTitle).should('be.visible');
  };
  
  clickPrimerLibro = () => { //ingreso al primer libro de la lista del book store
    cy.get(BookStoreLocators.bookStoreLibro1).click();
  };

  clickAgregarPrimerLibro = () => { //agrego el primer libro de la lista del book store
    cy.get(BookStoreLocators.addNewRecordButton).click();
  };

  verificaPrimerLibroAgregado = () => { //verifico que el primer libro ha sido agregado a la lista del book store
    cy.get(BookStoreLocators.btnProfile).click();
    cy.get(BookStoreLocators.bookStoreLibro1).contains('Git Pocket Guide')
  };
  
}

export default new BookStorePage();
