describe.skip('Refresh hreflangs', () => {
  // this is supposed to be used lcoally to refresh the fixture file and not having to do it manually
  it('Refresh hreflangs basic', () => {
    let langValue
    let hrefLangsArray = []

    cy.visit('/es/cheap-flights/london-united-kingdom/istanbul-turkey/')

    cy.step('Get all <link> elements in <head> with "hreflang" attribute')
    cy.get('head link')
      .filter('[hreflang]')
      .as('hrefLangs')
      .then($hrefLangs => {
        $hrefLangs.each(function () {
          langValue = this.attributes.hreflang.value

          hrefLangsArray.push(langValue)
        })
        cy.wrap(hrefLangsArray).as('hrefLangsArray')
        cy.writeFile('cypress/fixtures/hrefLangsFlightsLondonIstanbul.json', hrefLangsArray)
      })
  })

  it('Refresh hreflangs advanced', () => {
    let langValue
    let hrefValue
    let fixtureLine
    let fixtureLineArray = []

    cy.visit('/es/cheap-flights/london-united-kingdom/istanbul-turkey/')

    cy.step('Get all <link> elements in <head> with "hreflang" attribute')
    cy.get('head link')
      .filter('[hreflang]')
      .as('hrefLangs')
      .then($hrefLangs => {
        $hrefLangs.each(function () {
          langValue = this.attributes.hreflang.value
          hrefValue = this.attributes.href.value

          fixtureLine = JSON.stringify(`${hrefValue} : ${langValue}`)

          fixtureLineArray.push(fixtureLine)
        })
        cy.writeFile(
          'cypress/fixtures/hrefLangsFlightsLondonIstanbulAdvanced.json',
          fixtureLineArray,
        )
      })
  })
})
