describe('Refresh hreflangs', () => {
  // this is supposed to be used lcoally to refresh the fixture file and not having to do it manually
  it('Refresh hreflangs', () => {
    let langValue
    let hrefLangsArray = []

    cy.visit('/es/cheap-flights/london-united-kingdom/istanbul-turkey/')

    cy.step('Get all <link> elements in <head> with "hreflang" attribute')
    cy.get('head link')
      .filter('[hreflang]')
      .as('hrefLangs')
      .then($hrefLangs => {
        $hrefLangs.each(function (index, element) {
          langValue = element.attributes.hreflang.value

          hrefLangsArray.push(langValue)
          console.log(langValue)
          console.log(hrefLangsArray)
        })
        cy.wrap(hrefLangsArray).as('hrefLangsArray')
        cy.writeFile('cypress/fixtures/hrefLangsFlightsLondonIstanbul.json', hrefLangsArray)
      })
  })
})
