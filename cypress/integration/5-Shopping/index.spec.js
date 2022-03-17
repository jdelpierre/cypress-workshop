describe('Search a product to add to cart', () => {
  before(() => {
    cy.visit('https://www.i-run.fr/');

    // cy.get('.didomi-popup-view').should('be.visible');
    cy.get('#didomi-notice-agree-button').should('be.visible').click();
  });

  it('Search bar is visible and search a product', () => {
    cy.get('form#rechercheform input').should('be.visible');

    const searchTerm = 'mizuno';
    cy.get('#rechercheform input').type(searchTerm)
      .should('have.value', searchTerm);

    cy.get('form#rechercheform').submit();
  });

  it('Select the first reference and add to cart', () => {
    cy.get('#productsContainer .bc_produit').first().click();

    cy.get('#didomi-notice-agree-button').should('be.visible').click();
    cy.get('#img_principale').should('be.visible');

    cy.get('.ui-selectmenu-status').click();

    cy.get('#s_tailles-menu li').contains(/42/g).click();

    cy.get('#bt_commander').should('be.visible').click();
  });

  it('Cart contains product', () => {
    cy.get('.cart__content').should('be.visible');
    cy.contains('Mizuno').should('be.visible');
  });
});
