describe('Guestbook form', () => {
	it('Guestbook validation', () => {
		cy.visit('/guestbook.html');
		cy.get('form');
		cy.get('textarea[id="guestbookInput"]').type('hi');
		cy.get('form').submit();
		cy.contains('För kort meddelande!').end();
	});

	it('link back', () => {
		cy.visit('/guestbook.html');
		cy.get('h3 > a').click();
		cy.contains('Välkommen CoolUser');
	});

	it('delete guestbook post', () => {
		cy.visit('/guestbook.html');
		cy.get('textarea[id="guestbookInput"]').type('test message');
		cy.get('form').submit();
		cy.get('p').contains('test message').contains('a').click();
		cy.get('#entries').contains('test message').should('not.exist').end();
	});
});
