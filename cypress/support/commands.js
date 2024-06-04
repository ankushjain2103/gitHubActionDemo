// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types = 'Cypress' />

Cypress.Commands.add('fetchProductNamesAndAssert', (productNamesLocator, productNameToAssert)=>{


    const productNames = [];
      cy.get(productNamesLocator).each(($el) => {
        // Extract the text content of each product name element and push it to the array
        productNames.push($el.text());
      }).then(() => {
        // After iterating through all elements, print all product names
        cy.log('Product Names:', productNames);
        const specificProductName = productNameToAssert; // Replace with the product name you are looking for
        expect(productNames).to.include(specificProductName);

    })

})
