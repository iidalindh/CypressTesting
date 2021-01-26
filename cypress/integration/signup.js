describe("Sign up form", () => {
  it("Username validation", () => {
    cy.visit("/");
    cy.get("a").click();
    cy.contains("Registrera!");
    cy.get("form");
    cy.get('input[name="username"]').type("H");
    cy.get("form").submit();
    cy.contains("För kort eller för långt användarnamn!");

    cy.visit("/");
    cy.get("a").click();
    cy.contains("Registrera!");
    cy.get("form");
    cy.get('input[name="username"]').type("HejsanPåDejsan");
    cy.get("form").submit();
    cy.contains("För kort eller för långt användarnamn!").end();
  });

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
    cy.get('input[name="email"]').type("email@domain.");
    cy.get("form").submit();
    cy.contains("Felformatterad e-postadress!");
    cy.get("form");
    cy.get('input[name="username"]').type("CoolUser1337");
    cy.get('input[name="email"]').type("email@domain.com!");
    cy.get("form").submit();
    cy.contains("Felformatterad e-postadress!").end();
  });

  it("Password validation", () => {
    cy.visit("/");
    cy.get("a").click();
    cy.contains("Registrera!");
    cy.get("form");
    cy.get('input[name="username"]').type("CoolUser1337");
    cy.get('input[name="email"]').type("email@domain.com");
    cy.get("input[name=password]").type("123");
    cy.get("input[name=passwordConfirm]").type("1234");

    cy.get("form").submit();
    cy.contains("Lösenorden överensstämmer inte!").end();
  });

  it("Successfull registration", () => {
    cy.visit("/");
    cy.get("a").click();
    cy.contains("Registrera!");
    cy.get("form");
    cy.get('input[name="username"]').type("CoolUser1337");
    cy.get('input[name="email"]').type("email@domain.com");
    cy.get("input[name=password]").type("123");
    cy.get("input[name=passwordConfirm]").type("123");
    cy.get("form").submit();
    cy.contains("Anvädaren registrerad!").end();
  });
});
