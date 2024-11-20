describe('orageHRM', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.getByName('username').type('Admin');
    cy.getByName('password').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').click();
  })
})