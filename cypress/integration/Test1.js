///<reference types="Cypress"/>

describe("First Test", function () {
  it("test search box", function () {
    cy.visit("http://google.com");
    cy.get(".gLFyf").type("cat pictures");

    cy.wait(2000);
  });
});
