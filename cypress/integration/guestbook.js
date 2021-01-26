describe("Guestbook form", () => {
    it("Guestbook validation", () => {
    cy.visit("/guestbook.html");
    cy.get("form");
    cy.get('textarea[id="guestbookInput"]').type('hi');
    cy.get('form').submit();
    cy.contains("För kort meddelande!").end();
    });
  
 it("link back", () => {
    cy.visit("/guestbook.html");
    cy.get('a').click();
    cy.contains("Välkommen CoolUser").end();
 })

  });
  