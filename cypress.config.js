require("dotenv").config();

const { defineConfig } = require("cypress");
const { setupEnv } = require("./cypress/utils/enviroments");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            setupEnv(config);
            allureCypress(on);
            return config;
        },
    },
    env: {
        SECRET_EMAIL: process.env.SECRET_EMAIL,
        SECRET_PASSWORD: process.env.SECRET_PASSWORD
    }
});