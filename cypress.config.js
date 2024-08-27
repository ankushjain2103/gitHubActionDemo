const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
	reporterOptions: {
		reporterEnabled: 'mochawesome',
		mochawesomeReporterOptions: {
			reportDir: 'cypress/reports/mocha',
			reportFilename: '[name].html',
			useInlineDiffs: true,
			quite: true,
			overwrite: false,
			html: false,
			json: true,
			charts: true,
		},
	},

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

viewportWidth: 1200,
viewportHeight: 800,

pageLoadTimeout: 1200000,

});
