/// <reference types="cypress" />
// ***********************************************************

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = (on, config) => {
  allureWriter(on, config);
  return config;
};

