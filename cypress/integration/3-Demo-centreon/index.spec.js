describe('Tests Centreon', () => {
  beforeEach(() => {
    cy.visit('demo.centreon.com/');
  });

  it('Login form displayed', () => {
    cy.get('.logintab').should('be.visible');
  });

  it('Interacting with text fields to submit login form', () => {
    cy.get('input[name="useralias"]')
      .type('admin')
      .should('have.value', 'admin')
      .get('input[name="password"]')
      .type('centreon')
      .should('have.value', 'centreon');

    cy.get('form')
      .submit().then(() => {
        cy.get('#content').contains('pollers');
      });
  });
});
