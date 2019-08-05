/// <reference types="Cypress" />
context("OpenMRS Sample OWA Application", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("users/admin").as("admin");
  });

  describe("OpenMRS", function() {
    it("Should login for valid credentials", function() {
      cy.get("#username")
        .type(this.admin.username)
        .should("have.value", this.admin.username);
      cy.get("#password")
        .type(this.admin.password)
        .should("have.value", this.admin.password);
      cy.get("#Laboratory").click();
      cy.get("#loginButton").click();
      cy.get("#home-container h4").should(
        "contain",
        "Logged in as Super User () at Laboratory"
      );
    });
  });
});
