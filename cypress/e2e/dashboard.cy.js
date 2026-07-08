describe("Dashboard & Expenses Integration", () => {
  const email = "hello@example.com";
  const password = "123456";

  const login = () => {
    cy.visit("http://localhost:5173/login");

    cy.get("#email")
      .should("be.visible")
      .clear()
      .type(email)
      .should("have.value", email);

    cy.get("#password")
      .should("be.visible")
      .clear()
      .type(password)
      .should("have.value", password);

    cy.contains("button", "Login").click();

    // Tunggu redirect selesai
    cy.url({ timeout: 10000 }).should("eq", "http://localhost:5173/");
  };

  beforeEach(() => {
    cy.viewport(1366, 768);
  });

  it("Login berhasil dan menampilkan halaman Overview", () => {
    cy.intercept("GET", "**/goals").as("goals");
    cy.intercept("GET", "**/bills").as("bills");

    login();

    cy.wait("@goals");
    cy.wait("@bills");

    cy.contains("Total Balance").should("be.visible");
    cy.contains("Goals").should("be.visible");
    cy.contains("Upcoming Bill").should("be.visible");
    cy.contains("Statistics").should("be.visible");
    cy.contains("Expenses Breakdown").should("be.visible");
  });

  it("Berpindah ke halaman Expenses dan menampilkan data", () => {
    cy.intercept("GET", "**/expenses").as("expenses");

    login();

    cy.contains("Expenses").click();

    cy.url().should("include", "/expense");

    cy.wait("@expenses")
      .its("response.statusCode")
      .should("eq", 200);

    cy.contains("Expenses Comparison").should("be.visible");

    cy.contains("Loading Data").should("not.exist");

    cy.get(".grid").children().should("have.length.at.least", 1);
  });
});