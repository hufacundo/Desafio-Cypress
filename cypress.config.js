const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', 
    viewportWidth: 1440, viewportWidth: 900,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "chromeWebSecurity":false,
  },
});
