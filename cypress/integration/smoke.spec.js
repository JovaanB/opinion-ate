describe('Smoke test', () => {
  it('Can view the home page', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Learn React');
  });
});