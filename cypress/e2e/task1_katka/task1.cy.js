describe('Overenie stranky', () => {
  before('', () => {
    cy.visit('/en/country/china/?botview=1')
  })

  it('Overenie headera', () => {
    cy.log('overenie title')
    cy.title().should('eq', 'Cheap flights to China | Kiwi.com')

    cy.log('overenie meta description')
    cy.get('head meta[name=description]')
      .should('have.attr', 'content')
      .and(
        'eq',
        'Find the cheapest flights to China. Compare different airlines, choose the best price, and book your cheap plane ticket to China.',
      )

    cy.log('overenie canonical')
    cy.get('head link[rel=canonical]')
      .should('have.attr', 'href')
      .and('eq', 'https://www.kiwi.com/en/country/china/')
  })
})
