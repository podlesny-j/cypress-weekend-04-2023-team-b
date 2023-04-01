import './commands'
import 'cypress-plugin-xhr-toggle'
import 'cypress-plugin-steps'

beforeEach(() => {
  cy.suppressCookieAndSubscriptionDialogs()
})
