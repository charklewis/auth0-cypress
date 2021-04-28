describe("As a generic user", () => {
  afterEach(() => {
    cy.logout();
  });
  it("I can login and log out of the app, so that I can be properly authenticated", () => {
    cy.login({
      email: "",
      password: "",
    });
    cy.contains(/log out/i).should("be.visible");
  });
});
