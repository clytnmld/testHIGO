describe('Page Hubungi Kami', () => {
    beforeEach('visit website and close pop up', () => {
        cy.visit('https://higo.id/');
        cy.get('.ring-offset-background > .lucide').click();
    })
    it('Pa', function() {
        cy.contains('Solusi Menyeluruh Pemasaran Digital dengan WiFi & Customer Insight').should('be.visible')
        cy.wait(200)
        cy.get('[href="/contact-us"]').realClick()
        cy.contains('Hubungi tim HIGO').should('be.visible')
        cy.getByName('fullName').type('test')
        cy.getByName('email').type('test@gmail.com')
        cy.getByName('phoneNumber').type('0101010101010')
        cy.getByName('companyName').type('my company')
        cy.getByName('service').realClick()
        cy.get('[value="Higospot"]').should('be.visible')
        cy.get('[value="Integrated Digital Agency"]').should('be.visible')
        cy.get('[value="Wifi Advertising"]').should('be.visible')
        cy.getByName('message').type('teyping a message')
        cy.get('button').contains('Submit').should('exist')
        cy.wait(5000)
    });

})