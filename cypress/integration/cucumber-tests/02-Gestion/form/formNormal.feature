Feature: 03 - Crowdar Academy 2021 - Usuario normal Formulario

  Background:
    Given Me logueo como usuario correctamente


  Scenario: Cargar datos en formulario "Student Registration Form"
    When Ingreso al apartado formulario de practica
    And Cargo datos obligatorios requeridos
    And Envio datos de formulario
    Then Verifico que los datos se hayan enviado correctamente
    


