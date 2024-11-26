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
    cy.get('[role="menuitem"]').eq(1).click();
    cy.get('a > p').contains('Meters & Groups').click();
    cy.get('div > span').contains('Choose Action').click()
    cy.get('[role="menu"]').should('be.visible')
  })

  it('create meters Gauge when server is down', () => { 
    cy.intercept('POST','https://cmms.dev.aegislabs.work/api/meters/create', {
      statusCode: 500,
      body: {
        "data": {
            "meter_id": 17,
            "meter_name": "test",
            "meter_description": "test",
            "meter_type": "gauge",
            "uom_id": 2,
            "meter_reading_type_id": 1,
            "meter_domain_id": 1,
            "created_at": "2024-11-26T10:41:01.382197Z",
            "updated_at": "2024-11-26T10:41:01.382197Z",
            "created_by": "green",
            "updated_by": "green"
        }
    }
    })
    cy.get('[role="menuitem"]').eq(1).click();
    cy.get('a > p').contains('Meters & Groups').click();
    cy.get('div > span').contains('Choose Action').click()
    cy.get('[role="menu"]').should('be.visible')
    cy.get('button').contains('New Meter').click()
    /* ==== Generated with Cypress Studio ==== */
    cy.getByName('meter_name').type('New meter');
    cy.getByName('meter_description').type('meter description');
    cy.contains('Enter Meter Type').click({ force: true });
    cy.contains('Gauge').click();
    cy.contains('Select Reading Type').click({ force: true });
    cy.get('#react-select-3-option-0').click();
    cy.contains('Select Domain').click({ force: true });
    cy.get('#react-select-4-option-0').click();
    cy.contains('Select Unit of Measure').click({ force: true });
    cy.get('#react-select-5-option-0').click();
    cy.get('button').contains('Submit').click();
    cy.get('[role="dialog"]').should('be.visible');
    cy.get('button').contains('Yes! Confirm').click()
    cy.get('[role="dialog"]').contains('Oops...!').should('be.visible');
    cy.get('button').contains('OK').click()
    /* ==== End Cypress Studio ==== */
  })

  it('create meters Gauge success', () => { 
    cy.intercept('POST','https://cmms.dev.aegislabs.work/api/meters/create', {
      statusCode: 201,
      body: {
        "data": {
            "meter_id": 17,
            "meter_name": "test",
            "meter_description": "test",
            "meter_type": "gauge",
            "uom_id": 2,
            "meter_reading_type_id": 1,
            "meter_domain_id": 1,
            "created_at": "2024-11-26T10:41:01.382197Z",
            "updated_at": "2024-11-26T10:41:01.382197Z",
            "created_by": "green",
            "updated_by": "green"
        }
    }
    })
    cy.get('[role="menuitem"]').eq(1).click();
    cy.get('a > p').contains('Meters & Groups').click();
    cy.get('div > span').contains('Choose Action').click()
    cy.get('[role="menu"]').should('be.visible')
    cy.get('button').contains('New Meter').click()
    /* ==== Generated with Cypress Studio ==== */
    cy.getByName('meter_name').type('New meter');
    cy.getByName('meter_description').type('meter description');
    cy.contains('Enter Meter Type').click({ force: true });
    cy.contains('Gauge').click();
    cy.contains('Select Reading Type').click({ force: true });
    cy.get('#react-select-3-option-0').click();
    cy.contains('Select Domain').click({ force: true });
    cy.get('#react-select-4-option-0').click();
    cy.contains('Select Unit of Measure').click({ force: true });
    cy.get('#react-select-5-option-0').click();
    cy.get('button').contains('Submit').click();
    cy.get('[role="dialog"]').should('be.visible');
    cy.get('button').contains('Yes! Confirm').click()
    cy.get('[role="dialog"]').contains('Meter added successfully.').should('be.visible');
    cy.get('button').contains('OK').click()
    /* ==== End Cypress Studio ==== */
  })

  it('create meters Continuous when server is down', () => { 
    cy.intercept('POST','https://cmms.dev.aegislabs.work/api/meters/create', {
      statusCode: 500,
      body: {
        "data": {
            "meter_id": 17,
            "meter_name": "test",
            "meter_description": "test",
            "meter_type": "continuous",
            "uom_id": 2,
            "meter_reading_type_id": 1,
            "meter_domain_id": 1,
            "created_at": "2024-11-26T10:41:01.382197Z",
            "updated_at": "2024-11-26T10:41:01.382197Z",
            "created_by": "green",
            "updated_by": "green"
        }
    }
    })
    cy.get('[role="menuitem"]').eq(1).click();
    cy.get('a > p').contains('Meters & Groups').click();
    cy.get('div > span').contains('Choose Action').click()
    cy.get('[role="menu"]').should('be.visible')
    cy.get('button').contains('New Meter').click()
    /* ==== Generated with Cypress Studio ==== */
    cy.getByName('meter_name').type('New meter');
    cy.getByName('meter_description').type('meter description');
    cy.contains('Enter Meter Type').click({ force: true });
    cy.contains('Continuous').click();
    cy.contains('Select Reading Type').click({ force: true });
    cy.get('#react-select-3-option-0').click();
    cy.contains('Select Domain').click({ force: true });
    cy.get('#react-select-4-option-0').click();
    cy.contains('Select Unit of Measure').click({ force: true });
    cy.get('#react-select-5-option-0').click();
    cy.get('button').contains('Submit').click();
    cy.get('[role="dialog"]').should('be.visible');
    cy.get('button').contains('Yes! Confirm').click()
    cy.get('[role="dialog"]').contains('Oops...!').should('be.visible');
    cy.get('button').contains('OK').click()
    /* ==== End Cypress Studio ==== */
  })

  it('create meters Continuous success', () => { 
    cy.intercept('POST','https://cmms.dev.aegislabs.work/api/meters/create', {
      statusCode: 201,
      body: {
        "data": {
            "meter_id": 17,
            "meter_name": "test",
            "meter_description": "test",
            "meter_type": "continuous",
            "uom_id": 2,
            "meter_reading_type_id": 1,
            "meter_domain_id": 1,
            "created_at": "2024-11-26T10:41:01.382197Z",
            "updated_at": "2024-11-26T10:41:01.382197Z",
            "created_by": "green",
            "updated_by": "green"
        }
    }
    })
    cy.get('[role="menuitem"]').eq(1).click();
    cy.get('a > p').contains('Meters & Groups').click();
    cy.get('div > span').contains('Choose Action').click()
    cy.get('[role="menu"]').should('be.visible')
    cy.get('button').contains('New Meter').click()
    /* ==== Generated with Cypress Studio ==== */
    cy.getByName('meter_name').type('New meter');
    cy.getByName('meter_description').type('meter description');
    cy.contains('Enter Meter Type').click({ force: true });
    cy.contains('Continuous').click();
    cy.contains('Select Reading Type').click({ force: true });
    cy.get('#react-select-3-option-0').click();
    cy.contains('Select Domain').click({ force: true });
    cy.get('#react-select-4-option-0').click();
    cy.contains('Select Unit of Measure').click({ force: true });
    cy.get('#react-select-5-option-0').click();
    cy.get('button').contains('Submit').click();
    cy.get('[role="dialog"]').should('be.visible');
    cy.get('button').contains('Yes! Confirm').click()
    cy.get('[role="dialog"]').contains('Meter added successfully.').should('be.visible');
    cy.get('button').contains('OK').click()
    /* ==== End Cypress Studio ==== */
  })

  it('create meters Characteristic when server is down', () => { 
    cy.intercept('POST','https://cmms.dev.aegislabs.work/api/meters/create', {
      statusCode: 500,
      body: {
        "data": {
            "meter_id": 17,
            "meter_name": "test",
            "meter_description": "test",
            "meter_type": "characteristic",
            "uom_id": 2,
            "meter_reading_type_id": 1,
            "meter_domain_id": 1,
            "created_at": "2024-11-26T10:41:01.382197Z",
            "updated_at": "2024-11-26T10:41:01.382197Z",
            "created_by": "green",
            "updated_by": "green"
        }
    }
    })
    cy.get('[role="menuitem"]').eq(1).click();
    cy.get('a > p').contains('Meters & Groups').click();
    cy.get('div > span').contains('Choose Action').click()
    cy.get('[role="menu"]').should('be.visible')
    cy.get('button').contains('New Meter').click()
    /* ==== Generated with Cypress Studio ==== */
    cy.getByName('meter_name').type('New meter');
    cy.getByName('meter_description').type('meter description');
    cy.contains('Enter Meter Type').click({ force: true });
    cy.contains('Characteristic').click();
    cy.contains('Select Reading Type').click({ force: true });
    cy.get('#react-select-3-option-0').click();
    cy.contains('Select Domain').click({ force: true });
    cy.get('#react-select-4-option-0').click();
    cy.contains('Select Unit of Measure').click({ force: true });
    cy.get('#react-select-5-option-0').click();
    cy.get('button').contains('Submit').click();
    cy.get('[role="dialog"]').should('be.visible');
    cy.get('button').contains('Yes! Confirm').click()
    cy.get('[role="dialog"]').contains('Oops...!').should('be.visible');
    cy.get('button').contains('OK').click()
    /* ==== End Cypress Studio ==== */
  })

  it('create meters Characteristic success', () => { 
    cy.intercept('POST','https://cmms.dev.aegislabs.work/api/meters/create', {
      statusCode: 201,
      body: {
        "data": {
            "meter_id": 17,
            "meter_name": "test",
            "meter_description": "test",
            "meter_type": "characteristic",
            "uom_id": 2,
            "meter_reading_type_id": 1,
            "meter_domain_id": 1,
            "created_at": "2024-11-26T10:41:01.382197Z",
            "updated_at": "2024-11-26T10:41:01.382197Z",
            "created_by": "green",
            "updated_by": "green"
        }
    }
    })
    cy.get('[role="menuitem"]').eq(1).click();
    cy.get('a > p').contains('Meters & Groups').click();
    cy.get('div > span').contains('Choose Action').click()
    cy.get('[role="menu"]').should('be.visible')
    cy.get('button').contains('New Meter').click()
    /* ==== Generated with Cypress Studio ==== */
    cy.getByName('meter_name').type('New meter');
    cy.getByName('meter_description').type('meter description');
    cy.contains('Enter Meter Type').click({ force: true });
    cy.contains('Characteristic').click();
    cy.contains('Select Reading Type').click({ force: true });
    cy.get('#react-select-3-option-0').click();
    cy.contains('Select Domain').click({ force: true });
    cy.get('#react-select-4-option-0').click();
    cy.contains('Select Unit of Measure').click({ force: true });
    cy.get('#react-select-5-option-0').click();
    cy.get('button').contains('Submit').click();
    cy.get('[role="dialog"]').should('be.visible');
    cy.get('button').contains('Yes! Confirm').click()
    cy.get('[role="dialog"]').contains('Meter added successfully.').should('be.visible');
    cy.get('button').contains('OK').click()
    /* ==== End Cypress Studio ==== */
  })

  afterEach('logout', () => {
    cy.get('.dropdown-toggle').eq(0).click()
    cy.get('a').contains('Logout').click()
  })
})