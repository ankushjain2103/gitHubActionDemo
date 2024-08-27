/// <reference types="cypress" />

/*const { it } = require("mocha");*/

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  
  describe.skip("Product Listing", ()=>{
  
    it("Added Product from listing page", ()=>{
  
      cy.visit("https://www.jacobdelafon.fr/");
      cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
      cy.get(".css-1d4n021>li:nth-of-type(1)").click();
      cy.url().should('include', '/vasquelavabo');
      cy.get(".css-1l5wd4d>h1").should('contain', 'Vasque / Lavabo');
      cy.get('.css-1y8sph8>div:nth-of-type(2)>div>div>a:nth-of-type(1)').click();
      cy.url().should('include', '/vasquelavabo/vasque');
      cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Vasque');

      cy.get('.css-lk4s6a>div:nth-of-type(1)>div>div:nth-of-type(2)>button>span').should('contain', 'Ajouter à mon projet'); //Assert on button text
      cy.get('.css-lk4s6a>div:nth-of-type(1)>div>div:nth-of-type(2)>button>span').should('be.visible');
      cy.get('.css-lk4s6a>div:nth-of-type(1)>div>div:nth-of-type(2)>button>span').click();

      cy.get('#modal>div:nth-of-type(1)').click(); //close modal
      cy.get('.css-lk4s6a>div:nth-of-type(1)>div>div:nth-of-type(2)>button>span').click();
      cy.get('#modal>div:nth-of-type(2)>p:nth-of-type(1)').should('contain', 'Le produit a bien été ajouté à votre sélection');
      cy.get('#modal>div:nth-of-type(2)>button').click();//add the product
      cy.url().should('include', '/mon-projet');

      //add new product
      cy.get('.css-xtiu2f>div:nth-of-type(1)>div>div:nth-of-type(2)>div:nth-of-type(2)>a').click();
      cy.url().should('include', '/categories');
      cy.get('.css-19gy3w>div>a:nth-of-type(2)').click();// selected a new product(Meuble)
      cy.url().should('include', '/meuble');
      cy.get('.css-1y8sph8>div:nth-of-type(2)>div>div>a:nth-of-type(2)').click();
      cy.get('.css-19gy3w>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(1)>div>div:nth-of-type(2)>button').click();
      cy.get('#modal>div:nth-of-type(2)>button').click();//add the product

      cy.fetchProductNamesAndAssert('.css-xtiu2f>div:nth-of-type(1)>div>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>h3', 'Plan de toilette, sans découpe');
      
      /*const productNames = [];
      cy.get('.css-xtiu2f>div:nth-of-type(1)>div>div:nth-of-type(2)>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>h3').each(($el) => {
        // Extract the text content of each product name element and push it to the array
        productNames.push($el.text());
      }).then(() => {
        // After iterating through all elements, print all product names
        cy.log('Product Names:', productNames);
        const specificProductName = 'Plan de toilette, sans découpe'; // Replace with the product name you are looking for
        expect(productNames).to.include(specificProductName);

    })*/

    })

    it('Clicking on Product,opens product detail page', ()=>{

      cy.visit("https://www.jacobdelafon.fr/");
      cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
      cy.get(".css-1d4n021>li:nth-of-type(1)").click();
      cy.url().should('include', '/vasquelavabo');
      cy.get(".css-1l5wd4d>h1").should('contain', 'Vasque / Lavabo');
      cy.get('.css-1y8sph8>div:nth-of-type(2)>div>div>a:nth-of-type(1)').click();
      cy.url().should('include', '/vasquelavabo/vasque');
      cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Vasque');

      cy.get('.css-lk4s6a>div:nth-of-type(1)>div').click();//clicking on a particular product
      cy.wait(4000);
      cy.get('.css-1oj0vtp>div:nth-of-type(2)>div>h4').should('contain', 'Dimensions sélectionnées');
      cy.get('.css-1oj0vtp>div:nth-of-type(3)>h4').should('contain', 'Coloris');

    })

    it('Switching collections and dimensions tab', ()=>{

      cy.visit("https://www.jacobdelafon.fr/");
      cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
      cy.get(".css-1d4n021>li:nth-of-type(1)").click();
      cy.url().should('include', '/vasquelavabo');
      cy.get(".css-1l5wd4d>h1").should('contain', 'Vasque / Lavabo');
      cy.get('.css-1y8sph8>div:nth-of-type(2)>div>div>a:nth-of-type(1)').click();
      cy.url().should('include', '/vasquelavabo/vasque');
      cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Vasque');

      cy.get('.css-19gy3w>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1)>div>div>button:nth-of-type(1)').click();//clicking on 'Collections' tab
      cy.get('.MuiPaper-root>div:nth-of-type(2)>div>div>div>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div>div>h2').should('contain', 'DELTA');

      cy.get('.css-19gy3w>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1)>div>div>button:nth-of-type(2)').click();//clicking on 'Dimensions' tab
      cy.get('.css-w0vmt8>div>div:nth-of-type(3)>div>div>div:nth-of-type(1)>p').should('contain', 'Hauteur');

    })

    it('Collections tab', ()=>{

      cy.visit("https://www.jacobdelafon.fr/");
      cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
      cy.get(".css-1d4n021>li:nth-of-type(1)").click();
      cy.url().should('include', '/vasquelavabo');
      cy.get(".css-1l5wd4d>h1").should('contain', 'Vasque / Lavabo');
      cy.get('.css-1y8sph8>div:nth-of-type(2)>div>div>a:nth-of-type(1)').click();
      cy.url().should('include', '/vasquelavabo/vasque');
      cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Vasque');
      cy.get('.css-19gy3w>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1)>div>div>button:nth-of-type(1)').click();//clicking on 'Collections' tab
      cy.get('.MuiPaper-root>div:nth-of-type(2)>div>div>div>div>div:nth-of-type(2)>div>div:nth-of-type(1)>div:nth-of-type(1)>div>div>h2').click();
      cy.get('.css-7lli8o>div>h2').should('contain','CARILLON');
      cy.url().should('include', 'collection_taxonomy_term_name=CARILLON');
      cy.get('.css-12spo3g>span:nth-of-type(3)').should('contain', 'CARILLON');
      cy.wait(2000);

      //cy.fetchProductNamesAndAssert('.css-lk4s6a>div>div>div:nth-of-type(2)>h2', 'CARILLON');

      const productNames = [];
      cy.get('.css-lk4s6a>div>div>div:nth-of-type(2)>h2').each(($el) => {
        // Extract the text content of each product name element and push it to the array
        productNames.push($el.text());
      }).then(() => {
        // After iterating through all elements, print all product names
        cy.log('Product Names:', productNames);
        const specificProductName = 'CARILLON'; // Replace with the product name you are looking for
        const productNotAvailable = 'PATIO';
        expect(productNames).to.include(specificProductName);
        expect(productNames).to.not.include(productNotAvailable);

    })

    cy.get('.css-12spo3g').click();
    cy.url().should('not.include', 'collection_taxonomy_term_name=CARILLON');
    cy.wait(2000);
    cy.get('.css-19gy3w>div:nth-of-type(2)>button').click();//Clicked on 'See more products' button
    cy.wait(2000);

    const productNames2 = [];
      cy.get('.css-lk4s6a>div>div>div:nth-of-type(2)>h2').each(($el) => {
        // Extract the text content of each product name element and push it to the array
        productNames2.push($el.text());
      }).then(() => {
        // After iterating through all elements, print all product names
        cy.log('Product Names:', productNames2);
        const specificProductName1 = 'CARILLON'; // Replace with the product name you are looking for
        const specificProductName2 = 'PATIO';
        expect(productNames2).to.include(specificProductName1);
        expect(productNames2).to.include(specificProductName2);

    })

    })

    it('Dimensions Tab', ()=>{

      cy.visit("https://www.jacobdelafon.fr/");
      cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
      cy.get(".css-1d4n021>li:nth-of-type(1)").click();
      cy.url().should('include', '/vasquelavabo');
      cy.get(".css-1l5wd4d>h1").should('contain', 'Vasque / Lavabo');
      cy.get('.css-1y8sph8>div:nth-of-type(2)>div>div>a:nth-of-type(1)').click();
      cy.url().should('include', '/vasquelavabo/vasque');
      cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Vasque');
      cy.get('.css-19gy3w>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1)>div>div>button:nth-of-type(2)').click();//clicking on 'Dimensions' tab
      cy.get('.css-w0vmt8>div>div:nth-of-type(3)>div>div>div:nth-of-type(1)>p').should('contain', 'Hauteur');
      cy.get('.css-w0vmt8>div>div:nth-of-type(3)>div>div>div:nth-of-type(2)>p').should('contain', 'Longueur');
      cy.get('.css-w0vmt8>div>div:nth-of-type(3)>div>div>div:nth-of-type(3)>p').should('contain', 'Largeur');

      //Automate from here....
      cy.get('.MuiBox-root>div:nth-of-type(1)>span>span:nth-of-type(1)').invoke('val', 75) // Set the slider value to 75
      .trigger('input'); // Trigger the input event to simulate the change

    })

    it('Clicking on See more Products', ()=>{

      cy.visit("https://www.jacobdelafon.fr/");
      cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
      cy.get(".css-1d4n021>li:nth-of-type(1)").click();
      cy.url().should('include', '/vasquelavabo');
      cy.get(".css-1l5wd4d>h1").should('contain', 'Vasque / Lavabo');
      cy.get('.css-1y8sph8>div:nth-of-type(2)>div>div>a:nth-of-type(1)').click();
      cy.url().should('include', '/vasquelavabo/vasque');
      cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Vasque');
      cy.get('.css-19gy3w>div:nth-of-type(2)>button').click();//Clicked on 'See more products' button

    })

    it.only('Image visibility', ()=>{

      cy.visit("https://www.jacobdelafon.fr/");
      cy.get("#onetrust-button-group>button:nth-of-type(3)").click();
      cy.get(".css-1d4n021>li:nth-of-type(1)").click();
      cy.url().should('include', '/vasquelavabo');
      cy.get(".css-1l5wd4d>h1").should('contain', 'Vasque / Lavabo');
      cy.get('.css-1y8sph8>div:nth-of-type(2)>div>div>a:nth-of-type(1)').click();
      cy.url().should('include', '/vasquelavabo/vasque');
      cy.get('.css-pww01u>div:nth-of-type(2)>h1').should('contain', 'Vasque');
      cy.get('.css-lk4s6a>div:nth-of-type(1)>div>div:nth-of-type(1)>picture>img').should('be.visible');
      cy.get('.css-lk4s6a>div:nth-of-type(2)>div>div:nth-of-type(1)>picture>img').should('be.visible');
      cy.get('.css-lk4s6a>div:nth-of-type(5)>div>div:nth-of-type(1)>picture>img').should('be.visible');
      cy.get('.css-lk4s6a>div:nth-of-type(7)>div>div:nth-of-type(1)>picture>img').should('be.visible');

    })

})