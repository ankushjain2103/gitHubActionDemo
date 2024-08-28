/// <reference types="cypress" />

/*const { it } = require("mocha");*/

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  
  describe("Headers-WC_Bidet", ()=>{

    it('WC / Bidet', ()=>{

        cy.visit("https://www.jacobdelafon.fr/");
        cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
        cy.get(".css-1d4n021>li:nth-of-type(3)").click();
        cy.url().should('include', '/wcbidet');
        cy.get(".css-1l5wd4d>h1").should('contain', 'WC / Bidet');
    
        //WC suspendu
        cy.get('.css-1y8sph8>div:nth-of-type(2)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/wcbidet/wc-suspendu');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'WC suspendu');
        cy.get(".css-1d4n021>li:nth-of-type(3)").click();
    
        //WC à poser
        cy.get('.css-1y8sph8>div:nth-of-type(3)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/wcbidet/wc-poser');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'WC à poser');
        cy.get(".css-1d4n021>li:nth-of-type(3)").click();
    
        //Bidet
        cy.get('.css-1y8sph8>div:nth-of-type(4)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/wcbidet/bidet');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Bidet');
        cy.get(".css-1d4n021>li:nth-of-type(3)").click();
    
        //Urinoir
        cy.get('.css-1y8sph8>div:nth-of-type(5)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/wcbidet/urinoir');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Urinoir');
        cy.get(".css-1d4n021>li:nth-of-type(3)").click();
    
        //Accessoire pour WC et Bidet
        cy.get('.css-1y8sph8>div:nth-of-type(6)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/wcbidet/accessoire-pour-wc-et-bidet');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Accessoire pour WC et Bidet');
    
      })

  })