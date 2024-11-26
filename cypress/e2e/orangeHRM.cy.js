describe('orangeHRM', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.getByName('username').type('Admin');
    cy.getByName('password').type('admin123');
    cy.get('.oxd-button').click();
    cy.contains('Dashboard').should('exist');
  });
  it('logout', () => {
    cy.get('[alt="profile picture"]').click();
    fetch('/api/logout')
      .then((response) => response.json())
      .catch((error) => {
      console.error('Logout failed:', error);
     });
    cy.contains('Logout').click();
    cy.contains('Login').should('exist')
  })
})