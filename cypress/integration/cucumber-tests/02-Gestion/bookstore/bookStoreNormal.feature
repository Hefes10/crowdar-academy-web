Feature: 02 - Crowdar Academy 2021 - Usuario normal Book Store

  Background:
    Given Me logueo como usuario correctamente


  Scenario: Agregar libro a la biblioteca de usuario
    When Ingreso al book store 
    And Ingreso al primer libro de la lista
    And Agrego libro a Favoritos
    Then Verifico que se agrego libro al book store
    


