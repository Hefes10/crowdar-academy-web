# Crowdar Academy 2021 - Cypress Offtopic

## Purpose:
The following project has the purpose of demonstrate and let test automation developers to
to test a App Web using Cypress.io Framework.

***

## Project structure

A typical Cypress project usually looks like this

```

..\crowdar-academy-offtopic-cypress
|   .dockerignore
|   .drone.yml
|   .gitignore
|   .gitlab-ci.yml
|   cypress.json
|   dockerfile
|   lippia-rs.json
|   Makefile
|   package-lock.json
|   package.json
|   README.md
|   yarn.lock
|   
\---cypress
    +---downloads
    +---fixtures
    |   +---examples
    |   |       DatosExample.json
    |   |       LoginAdminExample.json
    |   |       LoginExample.json
    |   |       
    |   \---locators
    |           BookStoreLocators.json
    |           FormLocators.json
    |           HomeLocators.json
    |           LoginLocators.json
    |           
    +---integration
    |   |   AgregarLibrosNormal.spec.js
    |   |   CargarDatosFormNormal.spec.js
    |   |   NativeExecutionRunner-CrowdarAcademy2021.spec.js
    |   |   
    |   +---common
    |   |   +---Gestion
    |   |   |   +---bookstore
    |   |   |   |       bookstoreSteps.js
    |   |   |   |       
    |   |   |   \---form
    |   |   |           formSteps.js
    |   |   |           
    |   |   \---Login
    |   |           loginSteps.js
    |   |           
    |   \---cucumber-tests
    |       +---01-Login
    |       |       login.feature
    |       |       
    |       \---02-Gestion
    |           +---bookstore
    |           |       bookStoreNormal.feature
    |           |       
    |           \---form
    |                   formNormal.feature
    |                   
    +---plugins
    |       index.js
    |       
    +---support
    |   |   commands.js
    |   |   index.js
    |   |   
    |   \---pages
    |           BookStorePage.js
    |           FormPage.js
    |           HomePage.js
    |           LoginPage.js
    |           
    \---videos
        \---cucumber-tests
            +---01-Login
            |       login.feature.mp4
            |       
            \---02-Gestion
                +---bookstore
                |       bookStoreNormal.feature.mp4
                |       
                \---form
                        formNormal.feature.mp4
                        


## Folder's description:

|Path   |Description    |
|-------|----------------|
|crowdar-academy-offtopic-cypress\cypress\fixtures\examples\\\*.json | Folder with all the **Fixtures-Examples**|
|crowdar-academy-offtopic-cypress\cypress\fixtures\Download\\\*.xlsx | Folder with all downloads **Downloads** report.xlsx |
|crowdar-academy-offtopic-cypress\cypress\fixtures\locators\\\*.json | Folder with all the **Locators** matching steps with java code|
|crowdar-academy-offtopic-cypress\cypress\integration\\\*.spec.js | Folder with all the **Test Web** matching steps with java script code|
|crowdar-academy-offtopic-cypress\cypress\plugins\\\index.js | Folder with all the **Plugins** with java script code|
|crowdar-academy-offtopic-cypress\cypress\support\\\ | Folder with all the **Support Commands** with java script code|
|crowdar-academy-offtopic-cypress\ | Folder with all configuration needed to run Cypress |


## Getting started
***    

```

# Getting started

 snap install node --classic
 
 npm install cypress --save-dev
 
 npm install cypress-donwloadfile
 
 Run Cypress:  .\node_modules\.bin\cypress open