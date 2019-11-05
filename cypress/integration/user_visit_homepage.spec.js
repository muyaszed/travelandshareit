describe('Visit Hompage', function() {
  before(function() {
     cy.visit('http://localhost:3000')
  })
  describe('User is not authenticated', function() {
    it('should see login button', function() {
      cy.get('[data-testid="authLink"]').should('contain', 'Start sharing')
    })

    it('should not see itenarary link', function() {
       cy.get('[data-testid="itenararyLink"]').should('not.be.visible')
    })
  })
  describe('User is authenticated', function() {
    before(function() {
      cy.login()
    })
    it('should see logout button', function() {
      cy.get('[data-testid="signoutBtn"]').should('contain', 'Sign Out')
    })

    it('should see itenarary link', function() {
       cy.get('[data-testid="itenararyLink"]').should('be.visible')
    })
  })
});

