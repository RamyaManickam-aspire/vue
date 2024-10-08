describe('Task List App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173') // Change the port if needed
  })

  it('adds a new task', () => {
    cy.get('input').type('New Task{enter}')
    cy.contains('New Task').should('exist')
  })

  it('removes a task', () => {
    cy.get('input').type('Task to Remove{enter}')
    cy.contains('Task to Remove').should('exist')
    cy.contains('Remove').click()
    cy.contains('Task to Remove').should('not.exist')
  })
})
