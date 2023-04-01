describe('task 2 part 1', () => {
  beforeEach(() => {
    cy.visit('/mx/cheap-flights/london-united-kingdom/istanbul-turkey/')
  })

  it('check the language is not supported on the visited site', () => {
    cy.intercept('GET', 'https://cdn9.forter.com/vchk2').as('redirect')
  })
})
