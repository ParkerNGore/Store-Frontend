import React, { useEffect, useState } from "react";
import { getUser } from "../UserService";

import RoutesComponent from "./RoutesComponent";

function TokenReader() {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => updateToken(), []);

  function updateToken() {
    setToken(window.localStorage.getItem("auth"));

    const userIdLocalStorage = window.localStorage.getItem("userId");
    setUserId(userIdLocalStorage);

    if (userIdLocalStorage) {
      getUser(userIdLocalStorage)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  return (
    <RoutesComponent
      token={token}
      userId={userId}
      user={user}
      updateToken={updateToken}
    />
  );
}

export default TokenReader;
