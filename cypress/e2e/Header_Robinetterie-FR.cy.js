/// <reference types="cypress" />

/*const { it } = require("mocha");*/

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  
  describe.skip("Headers-Robinetterie", ()=>{

    it('Robinetterie', ()=>{

        cy.visit("https://www.jacobdelafon.fr/");
        cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
        cy.get(".css-1d4n021>li:nth-of-type(6)").click();
        cy.url().should('include', '/robinetterie');
        cy.get(".css-1l5wd4d>h1").should('contain', 'Robinetterie');
      
        // Robinetterie de vasque/lavabo
        cy.get('.css-1y8sph8>div:nth-of-type(2)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/robinetterie/robinetterie-de-vasquelavabo');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Robinetterie de vasque/lavabo');
        cy.get(".css-1d4n021>li:nth-of-type(6)").click();
      
        // Robinetterie de douche
        cy.get('.css-1y8sph8>div:nth-of-type(3)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/robinetterie/robinetterie-de-douche');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Robinetterie de douche');
        cy.get(".css-1d4n021>li:nth-of-type(6)").click();
      
        // Robinetterie de bain
        cy.get('.css-1y8sph8>div:nth-of-type(4)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/robinetterie/robinetterie-de-bain');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Robinetterie de bain');
        cy.get(".css-1d4n021>li:nth-of-type(6)").click();
      
        // Robinetterie de bidet
        cy.get('.css-1y8sph8>div:nth-of-type(5)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/robinetterie/robinetterie-de-bidet');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Robinetterie de bidet');
        cy.get(".css-1d4n021>li:nth-of-type(6)").click();
      
        // Robinetterie de cuisine
        cy.get('.css-1y8sph8>div:nth-of-type(6)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/robinetterie/robinetterie-de-cuisine');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Robinetterie de cuisine');
        cy.get(".css-1d4n021>li:nth-of-type(6)").click();
      
        // Accessoires de robinetterie
        cy.get('.css-1y8sph8>div:nth-of-type(7)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/robinetterie/accessoires-de-robinetterie');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Accessoires de robinetterie');
        
      })

  })