describe('user visit signin page', function() {
  before(function() {
    cy.visit('http://localhost:3000')
    cy.get('[data-testid="authLink"]').click()
    cy.get('[data-testid="signupLink"]').click()
  })
  it('should see email user input', function() {
    cy.get('[data-testid="signupEmail"]').should('be.visible')
    cy.get('[data-testid="signupEmail"]').should('have.focus')
  })

  it('should see password user input', function() {
    cy.get('[data-testid="signupPassword"]').should('be.visible')
  })

  it('should see password confirmation user input', function() {
    cy.get('[data-testid="signupPasswordConfirmation"]').should('be.visible')
  })

  it('should see sign up button', function() {
    cy.get('[data-testid="signupBtn"]').should('be.visible')
  })
})