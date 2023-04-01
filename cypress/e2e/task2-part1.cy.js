describe('task 2 part 1', () => {
  // beforeEach(() => {
  // })

  it('check the language is not supported on the visited site', () => {
    const originalTargetPath = '/mx/cheap-flights/london-united-kingdom/istanbul-turkey/'
    const regex = /\/([a-z]{2})\//

    const requestedLanguage = originalTargetPath.match(regex)
    expect(
      requestedLanguage,
      'Check there is one captured group returned by matched substring',
    ).to.have.length(2)

    cy.request({
      url: originalTargetPath,
      followRedirect: false,
    }).then(({ status, headers }) => {
      const resolvedPath = headers.location
      const resolvedLanguage = resolvedPath.match(regex)

      expect(status).to.eq(301)
      expect(resolvedPath).to.not.eq(originalTargetPath)
      expect(
        resolvedLanguage,
        'Check there is one captured group returned by matched substring',
      ).to.have.length(2)
      expect(resolvedLanguage[1]).to.not.eq(requestedLanguage[1])
    })
  })

  it.only('try to visit without redirect', () => {
    let langValue
    let hrefLangsArray = []

    cy.visit('/mx/cheap-flights/london-united-kingdom/istanbul-turkey/')
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

        return hrefLangsArray
      })
      .then(hrefLangsArray => {
        cy.wrap(hrefLangsArray).as('hrefLangsArray')
        cy.log(hrefLangsArray)
      })
  })
})
