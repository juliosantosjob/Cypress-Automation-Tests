import { ELM_LOGIN } from "../elements/login.element";

class LoginPage {

    openLoginPage() {
        cy.visit("/login");
        cy.contains(ELM_LOGIN.fieldLoginForm, "Login to your account")
            .should("be.visible");
    }

    fillCredents(email, password) {
        cy.typeOrClear(ELM_LOGIN.inputEmail, email);
        cy.typeOrClear(ELM_LOGIN.inputPassword, password);
    }

    submit() {
        cy.get(ELM_LOGIN.buttonSubmit).click();
    }

    atHome() {
        cy.contains(ELM_LOGIN.fieldLogout, "Logout")
            .should("be.visible");
    }

    stayOnLogin() {
        cy.get(ELM_LOGIN.fieldLoginForm)
            .should("be.visible");
    }

    verifyMessage(message) {
        cy.contains(ELM_LOGIN.fieldLoginForm, message)
            .should("be.visible");
    }

    doLogin(email, password) {
        this.openLoginPage();
        this.fillCredents(email, password);
        this.submit();
    }
}

export default new LoginPage;