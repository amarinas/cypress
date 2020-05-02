///<reference types="Cypress"/>

describe("First Test", function () {
  it("test search box", function () {
    cy.visit("http://google.com");
    cy.get(".gLFyf").type("cat pictures");

    cy.(
      ":nth-child(1) > .jKWzZXdEJWi__suggestions-inner-container > .sbtc > .sbl1 > span"
    ).click;
    cy.wait(2000);
  });
});
