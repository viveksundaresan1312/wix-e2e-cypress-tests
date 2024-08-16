// Command to login with valid credentials
Cypress.Commands.add("login", () => {
	cy.visit("https://www.wix.com/login"); // Navigate to WIX login page
	cy.get('input[name="email"]').type("userexe@maildrop.cc");
	cy.get('input[name="password"]').type("$eqAHbA8pLnAzHL4");
	cy.get('button[type="submit"]').click(); // Submit the login form
});

// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
