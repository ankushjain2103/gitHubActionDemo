/// <reference types="cypress" />

/*const { it } = require("mocha");*/

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  
  describe("Headers-Bain_Balnéo", ()=>{

    it('Bain / Balnéo', ()=>{

        cy.visit("https://www.jacobdelafon.fr/");
        cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
        cy.get(".css-1d4n021>li:nth-of-type(4)").click();
        cy.url().should('include', '/bainbalneo');
        cy.get(".css-1l5wd4d>h1").should('contain', 'Bain / Balnéo');
    
        // Baignoire
        cy.get('.css-1y8sph8>div:nth-of-type(2)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/bainbalneo/baignoire');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Baignoire');
        cy.get(".css-1d4n021>li:nth-of-type(4)").click();
    
        // Pare-Baignoire
        cy.get('.css-1y8sph8>div:nth-of-type(3)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/bainbalneo/pare-baignoire');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Pare-Baignoire');
        cy.get(".css-1d4n021>li:nth-of-type(4)").click();
    
        // Tablier de baignoire
        cy.get('.css-1y8sph8>div:nth-of-type(4)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/bainbalneo/tablier-de-baignoire');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Tablier de baignoire');
        cy.get(".css-1d4n021>li:nth-of-type(4)").click();
    
        // Accessoires de bain
        cy.get('.css-1y8sph8>div:nth-of-type(5)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/bainbalneo/accessoires-de-bain');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Accessoires de bain');
        cy.get(".css-1d4n021>li:nth-of-type(4)").click();
    
        // Balneo
        cy.get('.css-1y8sph8>div:nth-of-type(6)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/bainbalneo/balneo');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Balneo');
        cy.get(".css-1d4n021>li:nth-of-type(4)").click();
    
        // Accessoires de balnéo
        cy.get('.css-1y8sph8>div:nth-of-type(7)>div>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/bainbalneo/accessoires-de-balneo');
        cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Accessoires de balnéo');
    
      })

  })