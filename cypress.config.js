const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gjnvxc',
  video: true,
  videoCompression: 32,
  videoUploadPasses: true,
  e2e: {
    specPattern: [
      "cypress/e2e/**/*.cy.js"
    ],
    testIsolation: false,
    cacheAcrossSpecs: true,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
