const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://onebankweb-tcoe.sterlingapps.p.azurewebsites.net/login/",
    "defaultCommandTimeout": 80000,
    "pageLoadTimeout": 90000,
    "viewportHeight": 800,
    "viewportWidth": 1500,
  },
  env: {
    snapshotOnly: false
  }
  // setupNodeEvents(on, config) {
  //   // implement node event listeners here
  // },
  // },
});