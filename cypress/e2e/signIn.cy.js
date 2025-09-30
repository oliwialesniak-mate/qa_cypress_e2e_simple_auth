/// <reference types="cypress" />

describe('Login Flow Tests with Custom Commands', () => {
  it('Login with valid credentials', () => {
    cy.login(); // Default valid credentials

    cy.url().should('include', '/secure');
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('Login with invalid credentials', () => {
    cy.login('invalidUsername', 'invalidPassword');

    cy.url().should('eq', 'https://the-internet.herokuapp.com/login');
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('Logout from the app', () => {
    cy.login(); // Login first
    cy.logout(); // Then logout

    cy.url().should('eq', 'https://the-internet.herokuapp.com/login');
    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
