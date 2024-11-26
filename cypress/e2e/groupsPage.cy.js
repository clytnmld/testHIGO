import { GroupFactory } from '../factories/groupsFactory.cy'

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

  it('Visit page Groups filter test', () => {
    cy.intercept('GET', 'https://cmms.dev.aegislabs.work/api/meter-groups*', {
      statusCode: 200,
      body: GroupFactory
    })
    cy.get('[role="menuitem"]').eq(1).click();
    cy.get('a > p').contains('Meters & Groups').click();
    cy.contains('Meters & Groups').should('exist')
    cy.contains('Meters & Groups').then(($el) => {
      $el[0].style.overflow = 'hidden';
    });
    cy.wait(2000)
    cy.contains('Meter Groups').scrollIntoView({ offset: { top: 0, left: 0 } }).realHover({ force: true })
    cy.get('#root > div > div.wrapper.d-flex.flex-column.min-vh-100.bg-light > div.body.flex-grow-1.px-3 > div > div > div.flex.bg-white.items-center.px-4.pb-0.rounded.mb-2 > ul > div:nth-child(2) > div > div.flex.flex-col.flex-grow > div').should('be.visible').realClick({ force: true })
    cy.wait(1000)
    cy.get('[placeholder="Search"]').eq(2).type('Meter group example 1');
    cy.get('.table-data-cell').contains('Meter group example 1').eq(0)
    cy.wait(2000)
    cy.get('[placeholder="Search"]').eq(2).clear();
    cy.wait(2000)
    cy.get('[placeholder="Search"]').eq(3).type('dMeter group description example 1');
    cy.get('.table-data-cell').contains('Meter group description example 1').eq(0)
  })

  it('Visit page Groups pagination test', () => {
    cy.get('[role="menuitem"]').eq(1).click();
    cy.get('a > p').contains('Meters & Groups').click();
    cy.contains('Meters & Groups').should('exist')
    cy.contains('Meters & Groups').then(($el) => {
      $el[0].style.overflow = 'hidden';
    });
    cy.wait(2000)
    cy.contains('Meter Groups').scrollIntoView({ offset: { top: 0, left: 0 } }).realHover({ force: true })
    cy.get('#root > div > div.wrapper.d-flex.flex-column.min-vh-100.bg-light > div.body.flex-grow-1.px-3 > div > div > div.flex.bg-white.items-center.px-4.pb-0.rounded.mb-2 > ul > div:nth-child(2) > div > div.flex.flex-col.flex-grow > div').should('be.visible').realClick({ force: true })
    cy.wait(1000)
    cy.get('a').contains('2').click()
    cy.contains('meter groups test 2').should('be.visible')
  })

  it('create group', () => {
    /* ==== Generated with Cypress Studio ==== https://cmms.dev.aegislabs.work/api/meter-groups/create
*/
    cy.intercept('POST', 'https://cmms.dev.aegislabs.work/api/meter-groups/create*', {
      statusCode: 200,
      body: {
        "data": {
            "meter_group": {
                "meter_group_id": 20,
                "meter_group": "te",
                "description": "te",
                "created_at": "2024-11-26T13:08:48.108032Z",
                "updated_at": "2024-11-26T13:08:48.108032Z",
                "created_by": "green",
                "updated_by": "green"
            },
            "meter_in_groups": null
        }
    }
    })
    cy.get('[role="menuitem"]').eq(1).click();
    cy.get('a > p').contains('Meters & Groups').click();
    cy.contains('Meters & Groups').should('exist')
    cy.contains('Meters & Groups').then(($el) => {
      $el[0].style.overflow = 'hidden';
    });
    cy.wait(2000)
    cy.contains('Meter Groups').scrollIntoView({ offset: { top: 0, left: 0 } }).realHover({ force: true })
    cy.get('#root > div > div.wrapper.d-flex.flex-column.min-vh-100.bg-light > div.body.flex-grow-1.px-3 > div > div > div.flex.bg-white.items-center.px-4.pb-0.rounded.mb-2 > ul > div:nth-child(2) > div > div.flex.flex-col.flex-grow > div').should('be.visible').realClick({ force: true })
    cy.contains('Choose Action').click();
    cy.contains('New Meter Group').click()
    cy.get('[placeholder="Enter Meter Group"]').type('new meter group');
    cy.get('[placeholder="Enter Meter Group Description"]').type('meter group desc');
    cy.contains('Submit').click();
    cy.get('[role="dialog"').should('be.visible')
    cy.contains('Yes! Confirm').click()
    cy.contains('OK').click()
    /* ==== End Cypress Studio ==== */
  });

  afterEach('logout', () => {
    cy.get('.dropdown-toggle').eq(0).click()
    cy.get('a').contains('Logout').click()
  })
})