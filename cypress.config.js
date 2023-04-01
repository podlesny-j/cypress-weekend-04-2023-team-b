const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.kiwi.com',
    watchForFileChanges: true,
    env: {
      hideXhr: true,
    },
  },
})
