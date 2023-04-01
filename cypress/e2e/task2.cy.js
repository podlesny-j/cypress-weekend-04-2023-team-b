describe('task 2', () => {
  it('Part 1 - check the language is not supported on the visited site and is changed accordingly after redirect', () => {
    const originalTargetPath = '/mx/cheap-flights/london-united-kingdom/istanbul-turkey/'
    const regex = /\/([a-z]{2})\//

    const requestedLanguage = originalTargetPath.match(regex)[1]
    expect(
      requestedLanguage,
      'Check there is just one captured group returned by matched substring',
    ).to.have.length(2)

    cy.step('Request original URL, compare with redirect location')
    cy.request({
      url: originalTargetPath,
      followRedirect: false,
    }).then(({ status, headers }) => {
      const resolvedPath = headers.location
      const resolvedLanguage = resolvedPath.match(regex)[1]

      expect(status).to.eq(301)
      expect(resolvedPath).to.not.eq(originalTargetPath)
      expect(
        resolvedLanguage,
        'Check there is just one captured group returned by matched substring',
      ).to.have.length(2)
      expect(resolvedLanguage).to.not.eq(requestedLanguage)

      cy.step('Verify language from html element attribute')
      cy.visit(originalTargetPath)
      cy.get('html').should('have.attr', 'lang', resolvedLanguage)
    })
  })

  it('Part 2 - hreflangs', () => {
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
      })
    cy.fixture('hrefLangsFlightsLondonIstanbul.json').as('fixtureHrefLangsArray')

    cy.then(function () {
      expect(this.fixtureHrefLangsArray).to.deep.equal(this.hrefLangsArray)
    })
  })
})
