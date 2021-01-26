describe("Start page", () => {
 
 it("links validation", () => {
    cy.visit("/start.html");
    cy.get('a[href*="guestbook.html"]').click();
    cy.contains("Gästbok!");
    cy.visit("/start.html");
    cy.get('a[href*="presentation.html"]').click();
    cy.contains("Prentation!");
    cy.visit("/start.html");
    cy.get('a[href*="/Frontend2"]').click();
    cy.contains("Coola communityt").end();
 })

  });