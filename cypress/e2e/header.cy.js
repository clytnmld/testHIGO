describe('Test header', () => {
  beforeEach('visit website and close pop up', () => {
    cy.visit('https://higo.id/');
    cy.get('.ring-offset-background > .lucide').click();
  })
  it('Header ID', function() {
    cy.contains('Solusi Menyeluruh Pemasaran Digital dengan WiFi & Customer Insight').should('be.visible')
    cy.get('[for="navigation-about-us"]').contains('Tentang HIGO').click();
    cy.get('h1').should('have.text', 'Tentang HIGO');
    cy.contains('Layanan HIGO').realHover()
    cy.get('[href="/wifi-advertising"]').should('be.visible');
    cy.get('[href="/higospot"]').should('be.visible');
    cy.get('[href="/integrated-digital-agency"]').should('be.visible');
    cy.get('[href="/wifi-advertising"]').realClick();
    cy.contains('WiFi Advertising').should('be.visible')
    cy.contains('Layanan HIGO').realHover();
    cy.get('[href="/higospot"]').should('be.visible');
    cy.contains('HIGOspot').should('be.visible');
    cy.contains('Layanan HIGO').realHover();
    cy.get('[href="/integrated-digital-agency"]').realClick();
    cy.contains('Integrated Digital Agency').should('be.visible')
    cy.get('[href="/case-study"]').realClick()
    cy.contains('Berbagi cerita dari kolaborasi HIGO').should('be.visible')
    cy.get('[for="navigation-blog"] > a').should('have.attr', 'href', 'https://blog.higo.id/')
    cy.get('[href="/annualreport2024"]').realClick()
    cy.contains('Berbagi cerita dari kolaborasi HIGO').should('be.visible')
    cy.get('[href="/contact-us"]').realClick()
    cy.contains('Hubungi tim HIGO').should('be.visible')
    cy.get('[for="navigation-language"]').contains('ID').realHover()
  });

  it('Header ENG', function() {
    cy.wait(200)
    cy.get('[for="navigation-language"]').contains('ID').realHover()
    cy.get('[for="navigation-en"]').contains('English').realClick()
    cy.contains('360 Marketing Digital Solution with WiFi & Customer Insight').should('be.visible')
    cy.get('[for="navigation-about-us"]').contains('About HIGO').click();
    cy.get('h1').should('have.text', 'About HIGO');
    cy.contains('HIGO Services').realHover()
    cy.get('[href="/en/wifi-advertising"]').should('be.visible');
    cy.get('[href="/en/higospot"]').should('be.visible');
    cy.get('[href="/en/integrated-digital-agency"]').should('be.visible');
    cy.get('[href="/en/wifi-advertising"]').realClick();
    cy.contains('WiFi Advertising').should('be.visible')
    cy.contains('HIGO Services').realHover();
    cy.get('[href="/en/higospot"]').should('be.visible');
    cy.contains('HIGOspot').should('be.visible');
    cy.contains('HIGO Services').realHover();
    cy.get('[href="/en/integrated-digital-agency"]').realClick();
    cy.contains('Integrated Digital Agency').should('be.visible')
    cy.get('[href="/en/case-study"]').realClick()
    cy.contains('Sharing stories from HIGO collaborations').should('be.visible')
    cy.get('[for="navigation-blog"] > a').should('have.attr', 'href', 'https://blog.higo.id/')
    cy.get('[href="/en/annualreport2024"]').realClick()
    cy.contains('Sharing stories from HIGO collaborations').should('be.visible')
    cy.get('[href="/en/contact-us"]').realClick()
    cy.contains('Contact HIGO team').should('be.visible')
    cy.get('[for="navigation-language"]').contains('EN').realHover()
  });
})