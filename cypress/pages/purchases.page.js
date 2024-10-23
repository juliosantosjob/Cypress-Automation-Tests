import { ELM_PURCHASES } from "../elements/purchases.element";

class PurchasesPage {

    openPurchasesPage() {
        cy.visit("/products");

        cy.contains(ELM_PURCHASES.allProducts, "All Products")
            .should("be.visible");
    }

    searchProduct(product) {
        cy.typeOrClear(ELM_PURCHASES.inputSearch, product);
    }

    submitSearch() {
        cy.get(ELM_PURCHASES.buttonSearch).click();
    }

    addProductToCart() {
        cy.get(ELM_PURCHASES.buttonAddToCart)
            .scrollIntoView();
        cy.get(ELM_PURCHASES.buttonAddToCart)
            .click();
    }

    goToCart() {
        cy.contains(ELM_PURCHASES.buttonGoToCart, "View Cart")
            .click();
    }

    verifyProductOnCart(product) {
        cy.contains(ELM_PURCHASES.gridCart, product.name)
            .should("be.visible");

        cy.contains(ELM_PURCHASES.gridCart, product.price)
            .should("be.visible");
    }

    verifyProduct(product) {
        cy.contains(ELM_PURCHASES.productSearch, product.name)
            .should("be.visible");

        cy.contains(ELM_PURCHASES.productSearch, product.price)
            .should("be.visible");
    }

    searchItem(product) {
        this.searchProduct(product);
        this.submitSearch();
    }
}

export default new PurchasesPage();