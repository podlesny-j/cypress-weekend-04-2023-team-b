describe('task 2 part 1', () => {
  // beforeEach(() => {
  // })

  it('check the language is not supported on the visited site', () => {
    const originalTargetPath = '/mx/cheap-flights/london-united-kingdom/istanbul-turkey/'
    const regex = /\/([a-z]{2})\//

    const requestedLanguage = originalTargetPath.match(regex)
    expect(
      requestedLanguage,
      'Check there is one captured group returned from matched substring',
    ).to.have.length(2)

    cy.request({
      url: originalTargetPath,
      followRedirect: false,
    }).then(({ headers }) => {
      const resolvedPath = headers.location

      expect(resolvedPath).to.not.eq(originalTargetPath)

      const resolvedLanguage = resolvedPath.match(regex)
      expect(
        resolvedLanguage,
        'Check there is one captured group returned from matched substring',
      ).to.have.length(2)
      expect(resolvedLanguage[1]).not.eq(requestedLanguage[1])

      cy.log(requestedLanguage)
      cy.log(resolvedLanguage)
    })
  })
})
