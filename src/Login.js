import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return !isAuthenticated ? (
    <button onClick={loginWithRedirect}>Log in</button>
  ) : (
    <button onClick={logout}>Log out</button>
  );
}

export default LoginButton;
