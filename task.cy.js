/// <reference types='cypress' />
describe('Demoblaze', () => {
  let user;
  before(() => {
    cy.task('generateUser').then((generatedUser) => {
      user = generatedUser;
    });
  });

  it('should provide the ability to sign up', () => {
    cy.visit('');
    cy.contains('.nav-link', 'Sign up').click();
    cy.get('h5').should('contain', 'Sign up');
    cy.get('#sign-username').type(user.username);
    cy.get('#sign-password').type(user.password);
    cy.contains('.btn', 'Sign up').click();
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
 });
 
 it('should provide the ability to log in', () => {
  cy.visit('');
  cy.addUser(user, 1);
  cy.contains('.nav-link', 'Log in').click();
  cy.get('h5').should('contain', 'Log in');
  cy.get('#loginusername').type(user.username);
  cy.get('#loginpassword').type(user.password);
  cy.contains('.btn', 'Log in').click();
  cy.on('window:alert', (alert) => {
    expect(alert).to.eq(alertMessage);
  });
});

it('should provide the ability to added product to the cart', () => {
  cy.visit('');
  cy.contains('#itemc', 'Phones').click();
  cy.contains('.hrefch', 'Samsung galaxy s6').click();
  cy.contains('.btn', 'Add to cart').click();
  cy.contains('.nav-link', 'Cart').click();
  cy.get('.table').should('contain', 'Samsung galaxy s6');
});

});