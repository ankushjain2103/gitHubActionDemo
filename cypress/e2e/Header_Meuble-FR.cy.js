/// <reference types="cypress" />

/*const { it } = require("mocha");*/

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  
  describe("Headers-Meuble", ()=>{

    it('Meuble', ()=>{

        cy.visit("https://www.jacobdelafon.fr/");
        cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
        cy.get(".css-1d4n021>li:nth-of-type(2)").click();
        cy.url().should('include', '/meuble');
        cy.get(".css-1l5wd4d>h1").should('contain', 'Meuble');
    
        //Meuble sous plan vasque et plan de travail
        cy.get('.css-1y8sph8>div:nth-of-type(2)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/meuble/meuble-sous-plan-vasque-et-plan-de-travail');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Meuble sous plan vasque et plan de travail');
        cy.get(".css-1d4n021>li:nth-of-type(2)").click();
    
        //Miroir et armoire de toilette
        cy.get('.css-1y8sph8>div:nth-of-type(3)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/meuble/miroir-et-armoire-de-toilette');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Miroir et armoire de toilette');
        cy.get(".css-1d4n021>li:nth-of-type(2)").click();
    
        //Rangements complémentaires
        cy.get('.css-1y8sph8>div:nth-of-type(4)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/meuble/rangements-complementaires');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Rangements complémentaires');
        cy.get(".css-1d4n021>li:nth-of-type(2)").click();
    
        //Accessoires pour meuble
        cy.get('.css-1y8sph8>div:nth-of-type(5)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/meuble/accessoires-pour-meuble');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Accessoires pour meuble');
        
      })

  })