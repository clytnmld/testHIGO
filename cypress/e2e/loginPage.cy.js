describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://cmms.dev.aegislabs.work/');
  })
  it('Login success', function() {
    cy.visit('https://cmms.dev.aegislabs.work/');
    cy.get('button').contains('Login').should('have.attr', 'disabled');
    cy.getByName('username').type('green');
    cy.getByName('password').type('Password!123');
    cy.get('button').contains('Login').click();
    cy.contains('Dashboard').should('exist');
  });

  it('Login using invalid credentials', function() {
    cy.get('button').contains('Login').should('have.attr', 'disabled');
    cy.getByName('username').type('wrong');
    cy.getByName('password').type('wrong!123');
    cy.get('button').contains('Login').click();
    cy.contains('Error!').should('exist');
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Forgot password page', function() {
    cy.get('a').contains('Forgot password').click();
    cy.contains('Forgot Password').should('exist')
  });
})