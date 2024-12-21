require("dotenv").config();

function setupEnv(config) {
    const environment = process.env.ENV;

    if (!environment) {
        throw new Error("The \"ENV\" environment variable is required, use \"stg\", \"dev\" " +
            " or \"prd\"");
    }

    const hosts = {
        dev: process.env.DEV,
        stg: process.env.STAGING,
        prd: process.env.PROD
    };

    config.baseUrl = hosts[environment];
    return config;
}

module.exports = {

    /**
     * Define a URL base da aplicação de acordo com o ambiente definido.
     * 
     * @param {object} config - Configuração do Cypress.
     * @returns {string} - URL base por ambiente.
     */

    setupEnv
};