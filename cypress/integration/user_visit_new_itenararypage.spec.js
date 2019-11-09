describe('User is not authenticated', function() {
  before(function() {
    cy.visit('http://localhost:3000')
    
  })
  describe('Visit add itenarary using ui', function() {
    before(function() {
      cy.get('[data-testid="addItenararyLink"]').click()
    })
    
    it('should see signin page', function() {
      cy.get('[data-testid="signinEmail"]').should('be.visible')
    })
  })
  
});

describe('User is authenticated', function() {
  before(function() {
    cy.visit('http://localhost:3000')
    cy.login()
    cy.visit('http://localhost:3000')
    
  })
  describe('Visit add itenarary using ui', function() {
    before(function() {
      cy.get('[data-testid="addItenararyLink"]').click()
    })
    it('should see add itenanry title', function() {
      cy.get('[data-testid="iterPageTitle"]').should('be.visible')
    })
  })
  
})


