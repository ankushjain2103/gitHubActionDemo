/// <reference types="cypress" />

/*const { it } = require("mocha");*/

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  
  describe.skip("Headers-douche", ()=>{

    it('Douche', ()=>{

        cy.visit("https://www.jacobdelafon.fr/");
        cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
        cy.get(".css-1d4n021>li:nth-of-type(5)").click();
        cy.url().should('include', '/douche');
        cy.get(".css-1l5wd4d>h1").should('contain', 'Douche');

        // Pack douche complet
        cy.get('.css-1y8sph8>div:nth-of-type(2)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/douche/pack-douche-complet');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Pack douche complet');
        cy.get(".css-1d4n021>li:nth-of-type(5)").click();
    
        // Porte
        cy.get('.css-1y8sph8>div:nth-of-type(3)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/douche/porte');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Porte');
        cy.get(".css-1d4n021>li:nth-of-type(5)").click();
    
        // Paroi
        cy.get('.css-1y8sph8>div:nth-of-type(4)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/douche/paroi');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Paroi');
        cy.get(".css-1d4n021>li:nth-of-type(5)").click();
    
        // Douche tout-en-un
        cy.get('.css-1y8sph8>div:nth-of-type(5)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/douche/douche-tout-en-un');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Douche tout-en-un');
        cy.get(".css-1d4n021>li:nth-of-type(5)").click();
    
        // Receveur
        cy.get('.css-1y8sph8>div:nth-of-type(6)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/douche/receveur');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Receveur');
        cy.get(".css-1d4n021>li:nth-of-type(5)").click();
    
        // Accessoire de douche
        cy.get('.css-1y8sph8>div:nth-of-type(7)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/douche/accessoire-de-douche');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Accessoire de douche');
        cy.get(".css-1d4n021>li:nth-of-type(5)").click();
    
        // Panneaux muraux
        cy.get('.css-1y8sph8>div:nth-of-type(8)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/douche/panneaux-muraux');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Panneaux muraux');
    
    })

  })