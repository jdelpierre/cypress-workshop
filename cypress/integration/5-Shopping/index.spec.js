describe('Search a product to add to cart', () => {
  before(() => {
    cy.visit('https://www.boutique-bedecine.fr/');
  });

  it('Search bar is visible', () => {
    cy.get('#search_simple_term').should('be.visible');
  });

  it('Search a short', () => {
    const searchTerm = 'Dragon Ball Z';
    cy.get('#search_simple_term').type(searchTerm)
      .should('have.value', searchTerm);

    cy.get('form[name="search_simple"]').submit();
  });

  it('Select the first reference', () => {
    cy.get('.features_items')
      .first('.single-products').click();
  });
});
