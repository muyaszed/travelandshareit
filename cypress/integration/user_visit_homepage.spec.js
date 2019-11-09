describe('Visit Hompage', function() {
  
  describe('User is not authenticated', function() {
    before(function() {
      cy.visit('http://localhost:3000')
    })
    it('should see login button', function() {
      cy.get('[data-testid="addItenararyLink"]').should('contain', 'Start sharing')
    })
  })
  describe('User is authenticated', function() {
    before(function() {
      cy.visit('http://localhost:3000')
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

