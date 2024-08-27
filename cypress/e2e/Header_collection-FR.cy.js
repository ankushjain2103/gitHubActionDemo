/// <reference types="cypress" />

/*const { it } = require("mocha");*/

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  
  describe.skip("Headers-collections", ()=>{

    it('Collections', ()=>{

        cy.visit("https://www.jacobdelafon.fr/");
        cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
        cy.get(".css-1d4n021>li:nth-of-type(9)").click();
        cy.url().should('include', '/collections');
      
        //Odéon Rive Gauche
        cy.get('.css-19gy3w>div>div:nth-of-type(2)>div>a:nth-of-type(1)').click();
        cy.url().should('include', '/collections/odeon-rive-gauche');
        cy.get('.css-19gy3w>div>h1').should('contain', 'Odéon Rive Gauche - La collection plurielle');
        cy.get(".css-1d4n021>li:nth-of-type(9)").click();
      
        //Vivienne Signature
        cy.get('.css-19gy3w>div>div:nth-of-type(2)>div>a:nth-of-type(2)').click();
        cy.url().should('include', '/collections/vivienne-signature');
        cy.get('.css-19gy3w>div>h1').should('contain', 'Vivienne Signature - Audacieuse et féminine');
        cy.get(".css-1d4n021>li:nth-of-type(9)").click();
      
        //Vivienne
        cy.get('.css-19gy3w>div>div:nth-of-type(2)>div>a:nth-of-type(3)').click();
        cy.url().should('include', '/collections/vivienne');
        cy.get('.css-19gy3w>div>h1').should('contain', 'Vivienne');
        cy.get(".css-1d4n021>li:nth-of-type(9)").click();
      
        //TERRACE
        cy.get('.css-19gy3w>div>div:nth-of-type(2)>div>a:nth-of-type(4)').click();
        cy.url().should('include', '/collections/terrace');
        cy.get('.css-19gy3w>div>h1').should('contain', 'TERRACE - Un design unique');
        cy.get(".css-1d4n021>li:nth-of-type(9)").click();
      
        //Singulier
        cy.get('.css-19gy3w>div>div:nth-of-type(2)>div>a:nth-of-type(5)').click();
        cy.url().should('include', '/collections/singulier');
        cy.get('.css-19gy3w>div>h1').should('contain', 'Singulier – Le receveur en Néoroc !');
        cy.get(".css-1d4n021>li:nth-of-type(9)").click();
      
        //Seine
        cy.get('.css-19gy3w>div>div:nth-of-type(2)>div>a:nth-of-type(6)').click();
        cy.url().should('include', '/collections/seine');
        cy.get('.css-19gy3w>div>h1').should('contain', "Seine - Quand l'élégance rencontre l'intelligence");
        cy.get(".css-1d4n021>li:nth-of-type(9)").click();
      
        //PARALLEL
        cy.get('.css-19gy3w>div>div:nth-of-type(2)>div>a:nth-of-type(7)').click();
        cy.url().should('include', '/collections/parallel');
        cy.get('.css-19gy3w>div>h1').should('contain', 'PARALLEL – Le plan de toilette');
        cy.get(".css-1d4n021>li:nth-of-type(9)").click();
      
        //Panostyle
        cy.get('.css-19gy3w>div>div:nth-of-type(2)>div>a:nth-of-type(8)').click();
        cy.url().should('include', '/collections/panostyle');
        cy.get('.css-19gy3w>div>h1').should('contain', 'Panostyle – Rapide, durable et tendance ! ');
        cy.get(".css-1d4n021>li:nth-of-type(9)").click();
      
        //Panneaux muraux Panolux
        cy.get('.css-19gy3w>div>div:nth-of-type(2)>div>a:nth-of-type(9)').click();
        cy.url().should('include', '/collections/panolux');
        cy.get('.css-19gy3w>div>h1').should('contain', 'Panneaux muraux Panolux');
        cy.get(".css-1d4n021>li:nth-of-type(9)").click();
      
        //Oscar
        cy.get('.css-19gy3w>div>div:nth-of-type(2)>div>a:nth-of-type(10)').click();
        cy.url().should('include', '/collections/oscar');
        cy.get('.css-19gy3w>div>h1').should('contain', 'Oscar - Une collection intemporelle');
        cy.get(".css-1d4n021>li:nth-of-type(9)").click();
      
        //AEROBLOC
        cy.get('.css-19gy3w>div>div:nth-of-type(2)>div>a:nth-of-type(11)').click();
        cy.url().should('include', '/collections/aerobloc');
        cy.get('.css-19gy3w>div>h1').should('contain', 'AEROBLOC - NOTRE RECEVEUR ECO-RESPONSABLE');
        cy.get(".css-1d4n021>li:nth-of-type(9)").click();
      
        //Nouvelle Vague
        cy.get('.css-19gy3w>div>div:nth-of-type(2)>div>a:nth-of-type(12)').click();
        cy.url().should('include', '/collections/nouvelle-vague');
        cy.get('.css-19gy3w>div>h1').should('contain', 'Nouvelle Vague - La collection inspirée des années 50');
        cy.get(".css-1d4n021>li:nth-of-type(9)").click();
      
        //Néo
        cy.get('.css-19gy3w>div>div:nth-of-type(2)>div>a:nth-of-type(13)').click();
        cy.url().should('include', '/collections/neo');
        cy.get('.css-19gy3w>div>h1').should('contain', 'Néo - La collection familiale');
        cy.get(".css-1d4n021>li:nth-of-type(9)").click();
      
        //Métro
        cy.get('.css-19gy3w>div>div:nth-of-type(2)>div>a:nth-of-type(14)').click();
        cy.url().should('include', '/collections/metro');
        cy.get('.css-19gy3w>div>h1').should('contain', 'Métro – Allier confort et sécurité !');
        cy.get(".css-1d4n021>li:nth-of-type(9)").click();
      
        //Louise
        cy.get('.css-19gy3w>div>div:nth-of-type(2)>div>a:nth-of-type(15)').click();
        cy.url().should('include', '/collections/louise');
        cy.get('.css-19gy3w>div>h1').should('contain', 'Louise -La collection rétro');
        cy.get(".css-1d4n021>li:nth-of-type(9)").click();
      
        //Grands Boulevards
        cy.get('.css-19gy3w>div>div:nth-of-type(2)>div>a:nth-of-type(16)').click();
        cy.url().should('include', '/collections/grands-boulevards');
        cy.get('.css-19gy3w>div>h1').should('contain', 'Grands Boulevards - Une collection minimaliste');
        cy.get(".css-1d4n021>li:nth-of-type(9)").click();
      
        //Contra Mix n'Match
        cy.get('.css-19gy3w>div>div:nth-of-type(2)>div>a:nth-of-type(17)').click();
        cy.url().should('include', '/collections/contra-mix-nmatch');
        cy.get('.css-19gy3w>div>h1').should('contain', "Contra Mix n'Match - Unique et entièrement personnalisable");
        cy.get(".css-1d4n021>li:nth-of-type(9)").click();
      
        //Contra
        cy.get('.css-19gy3w>div>div:nth-of-type(2)>div>a:nth-of-type(18)').click();
        cy.url().should('include', '/collections/contra');
        cy.get('.css-19gy3w>div>h1').should('contain', 'Contra - élégante et discrète');
        cy.get(".css-1d4n021>li:nth-of-type(9)").click();
      
        //Cléo 1889
        cy.get('.css-19gy3w>div>div:nth-of-type(2)>div>a:nth-of-type(19)').click();
        cy.url().should('include', '/collections/cleo-1889');
        cy.get('.css-19gy3w>div>h1').should('contain', 'Cléo 1889 - Une collection iconique');
        cy.get(".css-1d4n021>li:nth-of-type(9)").click();
      
        //Bastille
        cy.get('.css-19gy3w>div>div:nth-of-type(2)>div>a:nth-of-type(20)').click();
        cy.url().should('include', '/collections/bastille');
        cy.get('.css-19gy3w>div>h1').should('contain', 'Bastille - La collection réconfortante');
        
      })

  })