describe('Tests Centreon', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('Application started with logo React displayed', () => {
    cy.get('.App-header').should('be.visible');
  });
});
