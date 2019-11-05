describe('user visit signin page', function() {
  before(function() {
    cy.visit('http://localhost:3000')
    cy.get('[data-testid="authLink"]').click()
  })
  it('should see email user input', function() {
    cy.get('[data-testid="signinEmail"]').should('be.visible')
    cy.get('[data-testid="signinEmail"]').should('have.focus')
  })

  it('should see password user input', function() {
    cy.get('[data-testid="signinPassword"]').should('be.visible')
  })

  it('should see sign in button', function() {
    cy.get('[data-testid="signinBtn"]').should('be.visible')
  })

  it('should see sign in with Facebook button', function() {
    cy.get('[data-testid="signinFacebookBtn"]').should('be.visible')
  })
})