import './commands'
import 'cypress-plugin-xhr-toggle'

beforeEach(() => {
  cy.suppressCookieAndSubscriptionDialogs()
})
