describe("Sign up form", () => {
  it("Email validation", () => {
    cy.visit("/");
    cy.get("a").click();
    cy.contains("Registrera!");
    cy.get("form");
    cy.get('input[name="username"]').type("CoolUser1337");
    cy.get('input[name="email"]').type("email@");
    cy.get("form").submit();
    cy.contains("Felformatterad e-postadress!");
    cy.get("form");
    cy.get('input[name="username"]').type("CoolUser1337");
    cy.get('input[name="email"]').type("email@domain."); // utan .com .se fungerar det lokalt
    cy.get("form").submit();
    cy.contains("Felformatterad e-postadress!").end();
  });
});
