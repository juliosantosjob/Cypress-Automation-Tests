// Import commands.js using ES2015 syntax:
import "./commands";
import "allure-cypress";

// Help hiding requests in command logs
const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
    if (opts.displayName === "script" || opts.name === "request") { return; }
    return origLog(opts, ...other);
};