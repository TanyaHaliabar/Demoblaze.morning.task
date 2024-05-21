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
Cypress.Commands.add('addUser', (user, n) => {
    for (let i = 0; i < n; i++) {
        cy.contains('.nav-link', 'Sign up').click();
        cy.get('h5').should('contain', 'Sign up');
        cy.get('#sign-username').type(user.username);
        cy.get('#sign-password').type(user.password);
        cy.contains('.btn', 'Sign up').click();
    }
  });