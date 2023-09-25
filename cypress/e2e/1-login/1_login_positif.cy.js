import '../1-login/0_login_session.cy.js'

describe('login', () => {
    it('Login pass', () => {
        cy.viewport(1390, 740)
        Cypress.session.clearAllSavedSessions()

        cy.login(Cypress.env('loginUsername'), Cypress.env('loginPassword'));
        cy.get("body").should("contain", "Dashboard")
    });
});