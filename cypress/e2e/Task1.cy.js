describe('First Task', () => {
  const H2_class = "h2[class='Heading__StyledHeading-sc-5yahaw-0 fVgiXr']"
  const H3_class = "h3[class='Heading__StyledHeading-sc-5yahaw-0 dNjoEc']"
  const div_class = "div[class='Heading__StyledHeading-sc-5yahaw-0 dNjoEc']"

  before('', () => {
    cy.visit('/en/country/china/?botview=1')
  })

  it('Visiting URL', () => {
    cy.get('h1')
      .should('be.visible')
      .and('have.text', 'Plane tickets to China')
      .as('H1Text')
      .then($h1Text => {
        const _H1 = $h1Text.text()
        cy.log(`Text ${_H1} je overený.`)
      })

    cy.get(H2_class)
      .as('Explore airlines and airports')
      .contains('Explore airlines and airports')
      .should('have.text', 'Explore airlines and airports')
      .then($h2Text => {
        const _H2 = $h2Text.text()
        cy.log(`Text ${_H2} je overený.`)
      })

    cy.get("h2[class='Heading__StyledHeading-sc-5yahaw-0 bHyRas']")
      .contains('Popular cities in China')
      .as('Popular_cities_in_China')
      .then($Popular_cities_in_China => {
        const _Popular_cities_in_China = $Popular_cities_in_China.text()
        cy.log('Sekcia ' + _Popular_cities_in_China + ' bola verifikovaná.')
      })

    cy.get(H2_class)
      .contains('Buses & trains')
      .as('BusesAndTrains')
      .should('have.text', 'Buses & trains')
      .then($busesAndTrains => {
        const _BusesAndTrains = $busesAndTrains.text()
        cy.log('Text ' + _BusesAndTrains + ' je overený.')
      })

    cy.get(H3_class)
      .contains('Airlines based in China')
      .as('AirlinesBasedInChina')
      .should('have.text', 'Airlines based in China')
      .then($h3Text => {
        const _H3 = $h3Text.text()
        cy.log('Text ' + _H3 + ' je overený.')
      })

    const H3Text_ = cy.get(H3_class).eq(1).should('have.text', 'Popular airlines flying to China')
    H3Text_.then($h3Text_ => {
      const _H3_ = $h3Text_.text()
      cy.log('Text ' + _H3_ + ' je overený.')
    })

    const Airports_in_China = cy.get(H3_class).eq(2).should('have.text', 'Airports in China')
    Airports_in_China.then($_Airports_in_China => {
      const Airports_in_China_ = $_Airports_in_China.text()
      cy.log('Text ' + Airports_in_China_ + ' je overený.')
    })

    const Airports_near_China = cy.get(H3_class).eq(3).should('have.text', 'Airports near China')
    Airports_near_China.then($_Airports_near_China => {
      const Airports_in_China_ = $_Airports_near_China.text()
      cy.log('Text ' + Airports_in_China_ + ' je overený.')
    })

    const Popular_airports_in_China = cy
      .get(H3_class)
      .eq(4)
      .should('have.text', 'Popular airports in China')
    Popular_airports_in_China.then($_Popular_airports_in_China => {
      const popular_airports_in_China = $_Popular_airports_in_China.text()
      cy.log('Text ' + popular_airports_in_China + ' je overený.')
    })

    const Popular_flights = cy.get(H2_class).eq(2).should('have.text', 'Popular flights')
    Popular_flights.then($popular_flights => {
      const _Popular_flights = $popular_flights.text()
      cy.log('Text ' + _Popular_flights + ' je overený.')
    })

    const Departure = cy.get(H3_class).eq(6).should('have.text', 'Departure')
    Departure.then($departure => {
      const _Departure = $departure.text()
      cy.log('Text ' + _Departure + ' je overený.')
    })

    const Return = cy.get(H3_class).eq(7).should('have.text', 'Return')
    Return.then($return => {
      const _Return = $return.text()
      cy.log('Text ' + _Return + ' je overený.')
    })

    const Explore_alternative_flights_to_China = cy
      .get(H3_class)
      .eq(8)
      .should('have.text', ' Explore alternative flights to China')
    Explore_alternative_flights_to_China.then($explore_alternative_flights_to_China => {
      const _Explore_alternative_flights_to_China = $explore_alternative_flights_to_China.text()
      cy.log('Text ' + _Explore_alternative_flights_to_China + ' je overený.')
    })

    const Find_popular_flights_to_China = cy
      .get(H3_class)
      .eq(9)
      .should('have.text', 'Find popular flights from China')
    Find_popular_flights_to_China.then($find_popular_flights_to_China => {
      const _Find_popular_flights_to_China = $find_popular_flights_to_China.text()
      cy.log('Text ' + _Find_popular_flights_to_China + ' je overený.')
    })

    const Cheap_flights = cy.get(H2_class).eq(3).should('have.text', 'Cheap flights')
    Cheap_flights.then($cheap_flights => {
      const _Cheap_flights = $cheap_flights.text()
      cy.log('Text ' + _Cheap_flights + ' je overený.')
    })

    /// Overovanie podsekcii Europa, Africa, Asia, Notrh Am, South Am, Oc
    const Europe = cy.get(div_class).eq(0).should('have.text', 'Europe')
    Europe.then($europe => {
      const _Europe = $europe.text()
      cy.log('Text ' + _Europe + ' je overený.')
    })

    const Asia = cy.get(div_class).eq(1).should('have.text', 'Asia')
    Asia.then($asia => {
      const _Asia = $asia.text()
      cy.log('Text ' + _Asia + ' je overený.')
    })

    const Africa = cy.get(div_class).eq(2).should('have.text', 'Africa')
    Africa.then($africa => {
      const _Africa = $africa.text()
      cy.log('Text ' + _Africa + ' je overený.')
    })

    const North_America = cy.get(div_class).eq(3).should('have.text', 'North America')
    North_America.then($north_America => {
      const _North_America = $north_America.text()
      cy.log('Text ' + _North_America + ' je overený.')
    })

    const South_America = cy.get(div_class).eq(4).should('have.text', 'South America')
    South_America.then($south_America => {
      const _South_America = $south_America.text()
      cy.log('Text ' + _South_America + ' je overený.')
    })

    const Oceania = cy.get(div_class).eq(5).should('have.text', 'Oceania')
    Oceania.then($oceania => {
      const _Oceania = $oceania.text()
      cy.log('Text ' + _Oceania + ' je overený.')
    })

    /// Overenie tlacidla
    cy.get("span[class='button-text inline-block w-full']")
      .eq(0)
      .should('have.text', 'Search flights, trains & buses')
  })
})
