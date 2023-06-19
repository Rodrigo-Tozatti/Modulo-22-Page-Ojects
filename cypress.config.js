const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: "mochawesome",
                reporterOptions: {
                  reportDir: "mochawesome-report",
                  overwrite: true,
                  html: true,
                  json: false,
                  timestamp: "mmddyyyy_HHMMss",
                },

    baseUrl: "http://lojaebac.ebaconline.art.br/"
  },
});
