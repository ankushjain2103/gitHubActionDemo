/// <reference types="cypress" />

/*const { it } = require("mocha");*/

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe("Headers_Vasque / Lavabo", ()=>{

  it("Vasque / Lavabo", ()=>{

    cy.visit("https://www.jacobdelafon.fr/");
    cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
    cy.get(".css-1d4n021>li:nth-of-type(1)").click();
    cy.url().should('include', '/vasquelavabo');
    cy.get(".css-1l5wd4d>h1").should('contain', 'Vasque / Lavabo');

    //Vasque
    cy.get('.css-1y8sph8>div:nth-of-type(2)>div>div>a:nth-of-type(1)').click();
    cy.url().should('include', '/vasquelavabo/vasque');
    cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Vasque');
    cy.get(".css-1d4n021>li:nth-of-type(1)").click();

    //Plan Vasque
    cy.get('.css-1y8sph8>div:nth-of-type(3)>div>div>a:nth-of-type(1)').click();
    cy.url().should('include', '/vasquelavabo/plan-vasque');
    cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Plan Vasque');
    cy.get(".css-1d4n021>li:nth-of-type(1)").click();

    //Lavabo
    cy.get('.css-1y8sph8>div:nth-of-type(4)>div>div>a:nth-of-type(1)').click();
    cy.url().should('include', '/vasquelavabo/lavabo');
    cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Lavabo');
    cy.get(".css-1d4n021>li:nth-of-type(1)").click();

    //Lave-mains
    cy.get('.css-1y8sph8>div:nth-of-type(5)>div>div>a:nth-of-type(1)').click();
    cy.url().should('include', '/vasquelavabo/lave-mains');
    cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Lave-mains');
    cy.get(".css-1d4n021>li:nth-of-type(1)").click();

    //Accessoires pour vasque
    cy.get('.css-1y8sph8>div:nth-of-type(6)>div>div>a:nth-of-type(1)').click();
    cy.url().should('include', '/vasquelavabo/accessoires-pour-vasque');
    cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Accessoires pour vasque');
    
  })

})