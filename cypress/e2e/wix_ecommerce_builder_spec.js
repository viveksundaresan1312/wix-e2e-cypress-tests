// cypress/integration/wix_ecommerce_builder_spec.js

describe("WIX eCommerce Builder UI Customization", () => {
	beforeEach(() => {
		// Runs before each test case in this block
		cy.login(); // Command to login with valid credentials

		// Verify successful login
		cy.url().should("include", "/dashboard");
	});

	it("should add a new product to the store", () => {
		// Navigate to the store management section
		cy.get('a[href*="store-manager"]').click();

		// Add a new product
		cy.get('button[data-testid="add-product-button"]').click(); // Open the "Add Product" form
		cy.get('input[name="productName"]').type("Test Product"); // Enter product name
		cy.get('textarea[name="description"]').type("This is a test product."); // Enter product description
		cy.get('input[name="price"]').type("20"); // Enter product price
		cy.get('button[type="submit"]').click(); // Save the product

		// Verify that the product has been added
		cy.get(".product-list").should("contain", "Test Product");
	});

	it("should customize and save a product display widget on the homepage", () => {
		// Navigate to the website editor
		cy.get('a[href*="editor"]').click();

		// Select the product display widget
		cy.get('[data-testid="product-display-widget"]').click();

		// Customize the widget (e.g., change the layout)
		cy.get('button[data-testid="layout-settings"]').click();
		cy.get('select[name="layoutType"]').select("Grid"); // Change layout to Grid
		cy.get('button[data-testid="save-button"]').click(); // Save the changes

		// Verify that the changes have been applied
		cy.get('[data-testid="product-display-widget"]').should(
			"have.class",
			"grid-layout"
		); // Verify layout change
	});

	it("should delete the newly added product from the store", () => {
		// Navigate back to the store management section
		cy.get('a[href*="store-manager"]').click();

		// Find and delete the product
		cy.get(".product-list")
			.contains("Test Product")
			.parents(".product-item")
			.find(".delete-button")
			.click();
		cy.get('button[data-testid="confirm-delete-button"]').click(); // Confirm deletion

		// Verify that the product has been deleted
		cy.get(".product-list").should("not.contain", "Test Product");
	});

	afterEach(() => {
		// Runs after each test case in this block
		// Optional: Code to log out or reset the environment
		cy.get('a[href*="logout"]').click(); // Log out
	});
});
