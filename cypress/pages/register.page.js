import { ELM_REGISTER } from "../elements/register.element";
import page from "../../pages-instance";

class RegisterPage {

    openRegisterPage() {
        page.login.openLoginPage();
        cy.contains(ELM_REGISTER.fieldRegisterForm, ELM_REGISTER.textNewUserSignup)
            .should("be.visible");
    }

    fillEmailAndName(person) {
        cy.typeOrClear(ELM_REGISTER.inputName, person.name);
        cy.typeOrClear(ELM_REGISTER.inputEmail, person.email);
    }

    submitSignUp() {
        cy.get(ELM_REGISTER.buttonSubmit).click();
    }

    fillBirthDate(day, month, year) {
        cy.get(ELM_REGISTER.selectDay).select(day);
        cy.get(ELM_REGISTER.selectMonth).select(month);
        cy.get(ELM_REGISTER.selectYear).select(year);
    }

    fillAccountInfo(person) {
        this.fillEmailAndName(person);
        this.submitSignUp();
        cy.contains(ELM_REGISTER.fieldLoginForm,
            ELM_REGISTER.textEnterAccount).should("be.visible");

        cy.get(ELM_REGISTER.checkboxMr).check();
        cy.typeOrClear(ELM_REGISTER.inputPassword, person.password);
        this.fillBirthDate(person.dateOfBirth.day, person.dateOfBirth.month,
            person.dateOfBirth.year);
    }

    fillAddressInfo(person) {
        cy.typeOrClear(ELM_REGISTER.inputFirstName, person.name);
        cy.typeOrClear(ELM_REGISTER.inputLastName, person.lastName);
        cy.typeOrClear(ELM_REGISTER.inputCompany, person.company);
        cy.typeOrClear(ELM_REGISTER.inputAddress, person.address.street);
        cy.typeOrClear(ELM_REGISTER.inputAddress2, person.address.street2);
        cy.get(ELM_REGISTER.selectCountry).select(person.address.country);
        cy.typeOrClear(ELM_REGISTER.inputCity, person.address.city);
        cy.typeOrClear(ELM_REGISTER.inputState, person.address.state);
        cy.typeOrClear(ELM_REGISTER.inputZipcode, person.address.zipcode);
        cy.typeOrClear(ELM_REGISTER.inputMobileNumber, person.contact.mobileNumber);
    }

    submitAccountCreation() {
        cy.get(ELM_REGISTER.buttonSubmitCreateAccount)
            .click();
    }

    verifyMessage(message) {
        cy.contains(ELM_REGISTER.textCreateAccount, message)
            .should("be.visible");
    }

    fillData(person) {
        this.fillAccountInfo(person);
        this.fillAddressInfo(person);
    }
}

export default new RegisterPage;