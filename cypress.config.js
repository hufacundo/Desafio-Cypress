const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {

    viewportWidth: 1440, viewportWidth: 900,
    //conectando projeto ao dashboard do cypress:
    projectId: "is66ix",



    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});