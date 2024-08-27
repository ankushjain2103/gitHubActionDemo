/// <reference types="cypress" />

/*const { it } = require("mocha");*/

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  
  describe.skip("Headers-blog", ()=>{

    it('Blog', ()=>{

      cy.visit("https://www.jacobdelafon.fr/");
      cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
      cy.get(".css-1d4n021>li:nth-of-type(8)").click();
      cy.url().should('include', '/blog');
      
      //Nos actualités
      cy.get('.css-19gy3w>div:nth-of-type(3)>div:nth-of-type(1)>h2').should('contain', 'Nos actualités');
      cy.get('.css-19gy3w>div:nth-of-type(3)>div:nth-of-type(1)>a').click();
      cy.url().should('include','/blog/actualites');
      cy.get(".css-1d4n021>li:nth-of-type(8)").click();
    
      //Lire nos conseils
      cy.get('.css-19gy3w>div:nth-of-type(3)>div:nth-of-type(2)>h2').should('contain', 'Lire nos conseils');
      cy.get('.css-19gy3w>div:nth-of-type(3)>div:nth-of-type(2)>a').click();
      cy.url().should('include','/blog/conseils');
      cy.get(".css-1d4n021>li:nth-of-type(8)").click();
    
      //Découvrir nos inspirations
      cy.get('.css-19gy3w>div:nth-of-type(3)>div:nth-of-type(3)>h2').should('contain', 'Découvrir nos inspirations');
      cy.get('.css-19gy3w>div:nth-of-type(3)>div:nth-of-type(3)>a').click();
      cy.url().should('include','/blog/inspirations');
      cy.get(".css-1d4n021>li:nth-of-type(8)").click();
    
      //En savoir plus sur la marque
      cy.get('.css-19gy3w>div:nth-of-type(3)>div:nth-of-type(4)>h2').should('contain', 'En savoir plus sur la marque');
      cy.get('.css-19gy3w>div:nth-of-type(3)>div:nth-of-type(4)>a').click();
      cy.url().should('include','/blog/la-marque');
    
    })

  })