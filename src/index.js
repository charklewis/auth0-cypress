import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Wrapper from "./App";
import Login from "./Login";

ReactDOM.render(
  <Auth0Provider
    domain="brucke.auth0.com"
    clientId="wLSIP47wM39wKdDmOj6Zb5eSEw3JVhVp"
    redirectUri={window.location.origin}
    audience="https://brucke.auth0.com/api/v2/"
    useRefreshTokens={true}
    cacheLocation="localstorage"
  >
    <Wrapper>
      <Login />
    </Wrapper>
  </Auth0Provider>,
  document.getElementById("root")
);
