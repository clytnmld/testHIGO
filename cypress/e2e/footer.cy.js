/* ==== Test Created with Cypress Studio ==== */
describe('testing footer', () => {
    beforeEach('visit website and close pop up', () => {
        cy.visit('https://higo.id/');
        cy.get('.ring-offset-background > .lucide').click();
    })
    it('Test Footer ID', function() {
        cy.wait(500)        
        cy.get('footer').scrollIntoView()
        cy.get('ul > li > [href="/wifi-advertising"]').click();
        cy.url().should('equal', 'https://higo.id/wifi-advertising')
        cy.get('footer').scrollIntoView()
        cy.get('ul > li > [href="/higospot"]').click();
        cy.url().should('equal', 'https://higo.id/higospot')
        cy.get('footer').scrollIntoView()
        cy.get('ul > li > [href="/integrated-digital-agency"]').click();
        cy.url().should('equal', 'https://higo.id/integrated-digital-agency')
        cy.get('footer').scrollIntoView()
        cy.get('ul > li > [href="/about-us"]').click();
        cy.url().should('equal', 'https://higo.id/about-us')
    });

    it('Test Footer ENG', function() {
        cy.wait(500)        
        cy.get('[for="navigation-language"]').contains('ID').realHover()
        cy.get('[for="navigation-en"]').contains('English').realClick()
        cy.get('footer').scrollIntoView()
        cy.get('ul > li > [href="/en/wifi-advertising"]').click();
        cy.url().should('equal', 'https://higo.id/en/wifi-advertising')
        cy.get('footer').scrollIntoView()
        cy.get('ul > li > [href="/en/higospot"]').click();
        cy.url().should('equal', 'https://higo.id/en/higospot')
        cy.get('footer').scrollIntoView()
        cy.get('ul > li > [href="/en/integrated-digital-agency"]').click();
        cy.url().should('equal', 'https://higo.id/en/integrated-digital-agency')
        cy.get('footer').scrollIntoView()
        cy.get('ul > li > [href="/en/about-us"]').click();
        cy.url().should('equal', 'https://higo.id/en/about-us')
    });
})