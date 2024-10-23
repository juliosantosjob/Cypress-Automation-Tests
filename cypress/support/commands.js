/**
 * Comando para limpar o campo caso um parametro seja vazio
 * 
 * @param {string} selector
 * @param {string} text
 */

Cypress.Commands.add("typeOrClear", (selector, text, ...options) => {
    if (!selector || typeof selector !== "string") {
        throw new Error("Não foi possivel encontrar o seletor: \"" + selector + "\"");
    }

    if (text === undefined) {
        throw new Error("Um parametro do tipo string " +
            "deve ser informado no campo \"text\" mesmo que seja vazio.");
    }

    text === ""
        ? cy.get(selector).clear()
        : cy.get(selector).type(text, ...options, { log: false });
});