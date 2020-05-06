describe('Testing Cypress.io', () => {
    before(() => {
        cy.visit('https://cypress.io');
    });

    it('Closing banners should close banners', () => {
        // Testing top banner
        cy.get('.close-top-banner-btn')
          .should('be.visible')
          .click()
          .should('not.exist');

        // Testing cookie consent
        cy.get('.cookieConsent').should('be.visible');
        cy.get('.button').click();
        cy.get('.cookieConsent').should('not.exist');
    });

    it('Nagivation should navigate to the corresponding pages', () => {
        // Navigating to "Features"
        cy.get('.styled__NavItem-sc-16oj5lj-4').eq(0).click();
        cy.url().should('include', 'features');

        // Navigating to "How it works"
        cy.get('.styled__NavItem-sc-16oj5lj-4').eq(1).click();
        cy.url().should('include', 'how-it-works');

        // Navigating to "Dashboard"
        cy.get('.styled__NavItem-sc-16oj5lj-4').eq(2).click();
        cy.url().should('include', 'dashboard');

        // Navigating to "Pricing"
        cy.get('.styled__NavItem-sc-16oj5lj-4').eq(3).click();
        cy.url().should('include', 'pricing');
    });

    it('Subscribing should not work if there\'s no email provided', () => {
        cy.get('.hs-input').should('not.have.class', 'error');
        cy.get('.hs-button').click();
        cy.get('.hs-input').should('have.class', 'error');
    });
});