Cypress.Commands.add("goToHomePage", () => {
  cy.visit("http://localhost:3000/");
});

Cypress.Commands.add("login", (user) => {
  cy.goToHomePage();
  cy.clearLocalStorage();

  const client_id = "wLSIP47wM39wKdDmOj6Zb5eSEw3JVhVp";
  const client_secret = "";
  const audience = "https://brucke.auth0.com/api/v2/";
  const scope = "openid profile email offline_access";

  cy.request({
    method: "POST",
    url: "https://brucke.auth0.com/oauth/token",
    body: {
      grant_type: "password",
      username: user.email,
      password: user.password,
      audience,
      scope,
      client_id,
      client_secret,
    },
  }).then(({ body: { access_token, expires_in, id_token, token_type } }) => {
    cy.window().then((win) => {
      win.localStorage.setItem(
        `@@auth0spajs@@::${client_id}::${audience}::${scope}`,
        JSON.stringify({
          body: {
            client_id,
            access_token,
            id_token,
            scope,
            expires_in,
            token_type,
            decodedToken: {
              user: JSON.parse(
                Buffer.from(id_token.split(".")[1], "base64").toString("ascii")
              ),
            },
            audience,
          },
          expiresAt: Math.floor(Date.now() / 1000) + expires_in,
        })
      );
      cy.reload();
    });
  });
});

Cypress.Commands.add("logout", () => {
  // cy.get("[data-testid=menu-bar-profile]").click({ force: true })
  // cy.contains(/sign out/i).click({ force: true })
});
