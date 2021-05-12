import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
import HomePage from "../../../../support/pages/HomePage";
import BookStorePage from "../../../../support/pages/BookStorePage";


When('Ingreso al book store', () => {
    HomePage.clickBotonBookStore();
})

And('Ingreso al primer libro de la lista', () => {
    BookStorePage.clickPrimerLibro();
})

And('Agrego libro a Favoritos', () => {
    BookStorePage.clickAgregarPrimerLibro();
})

And('Verifico que se agrego libro al book store', () => {
    BookStorePage.verificaPrimerLibroAgregado();
})

