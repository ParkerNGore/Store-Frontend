import React, { useEffect, useState } from "react";

import RoutesComponent from "./RoutesComponent";

function TokenReader() {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => updateToken(), []);

  function updateToken() {
    setToken(window.localStorage.getItem("Auth"));
    setUserId(window.localStorage.getItem("UserId"));
  }

  return (
    <RoutesComponent token={token} userId={userId} updateToken={updateToken} />
  );
}

export default TokenReader;
