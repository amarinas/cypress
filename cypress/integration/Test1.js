///<reference types="Cypress"/>

describe("First Test", function () {
  it("Does not do much", function () {
    cy.visit("http://google.com");
    cy.get(".gLFyf").type("cat pictures");
  });
});
