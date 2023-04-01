

describe('Overenie stranky', () => {
  beforeEach('', () => {
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
  it('uloha jeden cast za h1',()=>{
        cy.log('overenie navbaru') 
        cy.get('[data-test="NavBar"]').should('be.visible')

        cy.log('overenie loadera')
        cy.get('[type="pageLoader"]').should('be.visible')

        cy.log('overenie neexistencie search buttonu na botview')
        cy.get('[data-test="LandingSearchButton"]').should('not.exist')


    
        })      
    
})
