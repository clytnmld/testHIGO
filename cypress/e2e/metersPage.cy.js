import { metersAndGroupFactory } from '../factories/metersAndGroupsFactory.cy'

describe('template spec', () => {
  beforeEach('Login website', () => {
    cy.visit('https://cmms.dev.aegislabs.work/');
    cy.get('button').contains('Login').should('have.attr', 'disabled');
    cy.getByName('username').type('green');
    cy.getByName('password').type('Password!123');
    cy.get('button').contains('Login').click();
    cy.contains('Dashboard').should('exist');
  })
  it('Visit page Meters & Groups when server is down', () => {
    cy.intercept('GET','https://cmms.dev.aegislabs.work/api/meters*', {
      statusCode: 500
    })
    cy.get('[role="menuitem"]').eq(1).click();
    cy.get('a > p').contains('Meters & Groups').click();
    cy.contains('Request failed with status code 500').should('exist')
  })

  it('Visit page Meters & Groups filter test', () => {
    cy.get('[role="menuitem"]').eq(1).click();
    cy.get('a > p').contains('Meters & Groups').click();
    cy.contains('Meters & Groups').should('exist')
    cy.get('[placeholder="Search"]').eq(2).type('newmeter1');
    cy.get('.table-data-cell').contains('newmeter1').eq(0)
    cy.wait(2000)
    cy.get('[placeholder="Search"]').eq(2).clear();
    cy.wait(2000)
    cy.get('[placeholder="Search"]').eq(3).type('descriptionmeter');
    cy.get('.table-data-cell').contains('descriptionmeter').eq(0)
    cy.wait(2000)
    cy.get('[placeholder="Search"]').eq(3).clear();
    cy.wait(2000)
    cy.get('[placeholder="Search"]').eq(4).type('continuous');
    cy.get('.table-data-cell').contains('continuous').eq(0)
    cy.wait(2000)
    cy.get('[placeholder="Search"]').eq(4).clear();
    cy.wait(2000)
  })

  it.only('Visit page Meters & Groups meter and meter groups dropdown', () => {
    cy.get('[role="menuitem"]').eq(1).click();
    cy.get('a > p').contains('Meters & Groups').click();
    cy.contains('Meters & Groups').should('exist')
    cy.wait(2000)
    cy.get('div > li').contains('Meters').trigger('mouseover')
    cy.contains('List Meters').should('exist')
    cy.contains('Meters').should('exist')
    cy.contains('Where Used').should('exist')
    cy.get('div > li').contains('Meter Groups').trigger('mouseover')
    cy.contains('List Meter Groups').should('exist')
    cy.contains('Meter Groups').should('exist')
    cy.contains('Where Used').should('exist')
    cy.wait(2000)
  })

  afterEach('logout', () => {
    cy.get('.dropdown-toggle').eq(0).click()
    cy.get('a').contains('Logout').click()
  })
})