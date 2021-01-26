describe("Presentation page", () => {
  it("link back", () => {
    cy.visit("/presentation.html");
    cy.get("a").click();
    cy.contains("Välkommen CoolUser").end();
  });
});
