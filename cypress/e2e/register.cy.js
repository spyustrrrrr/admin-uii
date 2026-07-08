describe("User Register", () => {
  it("should navigate to register page and fill register form", () => {

    cy.visit("http://localhost:5173/login");
    cy.wait(3000);

    cy.contains("Create an account").click();
    cy.url().should("include", "/register");

    cy.get("#name")
      .should("be.visible")
      .should("have.attr", "placeholder", "Tanzir Rahman")
      .type("Tanzir Rahman")
      .should("have.value", "Tanzir Rahman");

    cy.get("#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    // isi password
    cy.get("#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "********")
      .type("123456")
      .should("have.value", "123456");

    // tidak klik tombol Sign Up
    cy.wait(2000);
  });
});