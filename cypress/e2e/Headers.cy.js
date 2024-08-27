/// <reference types="cypress" />

/*const { it } = require("mocha");*/

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  
  describe.skip("Headers", ()=>{


    it('logo', ()=>{

    cy.visit("https://www.jacobdelafon.fr/");
    cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
    cy.get('.css-udj4s9>span>a>img').should('have.attr', 'alt', 'logo');
    cy.get('.css-udj4s9>span>a>img').should('be.visible');
    cy.get('.css-udj4s9>span>a').click();
    cy.url().should('include', '/');

    })

    it('Accès professionnnels', ()=>{
        
    cy.visit("https://www.jacobdelafon.fr/");
    cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
    cy.get('.css-891v2k>div>header>div>div>div>nav>ul>li:nth-of-type(1)').click();
    cy.url().should('include', '/pro-access/les-pros');
    cy.get('.css-19gy3w>div>div:nth-of-type(2)').should('contain', 'Bienvenue aux professionnels');

    })

    it('contact', ()=>{

    cy.visit("https://www.jacobdelafon.fr/");
    cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
    cy.get('.css-891v2k>div>header>div>div>div>nav>ul>li:nth-of-type(2)').click();
    cy.url().should('include', '/page/nous-contacter');
    cy.get('.css-19gy3w>div>div>h1').should('contain', 'Nous contacter');

    })

    it('Mon Projet', ()=>{

        cy.visit("https://www.jacobdelafon.fr/");
        cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
        cy.get('.css-891v2k>div>header>div>div>div>nav:nth-of-type(2)>a:nth-of-type(1)').click();
        cy.url().should('include', '/mon-projet');
        cy.get('.css-bbw4fh>div>h3').should('contain', 'Mes projets de salle de bain');

    })

    it('showrooms', ()=>{

        cy.visit("https://www.jacobdelafon.fr/");
        cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
        cy.get('.css-891v2k>div>header>div>div>div>nav:nth-of-type(2)>a:nth-of-type(2)').click();
        cy.url().should('include', '/showrooms');
        cy.get('.css-19gy3w>section>h1').should('contain', 'Plus de 600 showrooms où voir et acheter');

    })

    it('login', ()=>{

        cy.visit("https://www.jacobdelafon.fr/");
        cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
        cy.get('.css-891v2k>div>header>div>div>div>nav:nth-of-type(2)>a:nth-of-type(3)').click();
        cy.url().should('include', '/login');
        cy.get('.css-19gy3w>div>div:nth-of-type(2)>h1').should('contain', 'Mon compte');

    })

    it('search', ()=>{

        cy.visit("https://www.jacobdelafon.fr/");
        cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
        cy.get('.css-1d4n021>li:nth-of-type(10)>div>button').click();
        cy.get('.css-1utdrqf>input').should('have.attr', 'type', 'search');
        cy.get('.css-1utdrqf>input').should('have.attr', 'placeholder', 'Rechercher un produit, un conseil, une inspiration');
        cy.get('.css-1utdrqf>button').should('contain', 'Fermer');
        cy.get('.css-1utdrqf>button').click();

    })

  })