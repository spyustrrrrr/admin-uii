// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('admin-uii-sandy.vercel.app/ ')
//   })
// })


//testing halaman login
describe("User login", () => {
  it("should allow user to log in with valid credentials", () => {
    // cy.viewport(550,750);

    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "●●●●●●●●●●●●●●")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.get("nav");    
    cy.get("header");
    
    cy.wait(5000);
  });

  it("should not allow user to log in with invalid credentials", () => {
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "●●●●●●●●●●●●●●")
      .type("123")
      .should("have.value", "123");

    cy.get("button").contains("Login").click();

    cy.get("div").contains("Wrong Password");
  }); 
});

//testing halaman register

// describe("User Register", () => {
//   it("should navigate to register page and fill register form", () => {

//     cy.visit("http://localhost:5173/login");
//     cy.wait(3000);

//     cy.contains("Create an account").click();
//     cy.url().should("include", "/register");

//     cy.get("#name")
//       .should("be.visible")
//       .should("have.attr", "placeholder", "Tanzir Rahman")
//       .type("Tanzir Rahman")
//       .should("have.value", "Tanzir Rahman");

//     cy.get("#email")
//       .should("be.visible")
//       .should("have.attr", "placeholder", "hello@example.com")
//       .type("hello@example.com")
//       .should("have.value", "hello@example.com");

//     // isi password
//     cy.get("#password")
//       .should("be.visible")
//       .should("have.attr", "placeholder", "********")
//       .type("123456")
//       .should("have.value", "123456");

//     // tidak klik tombol Sign Up
//     cy.wait(2000);
//   });
// });