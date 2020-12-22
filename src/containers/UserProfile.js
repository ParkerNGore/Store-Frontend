import React from "react";

import Navigation from "../components/Navigation";
import { Redirect } from "react-router-dom";

function UserProfile({ user, token, userId }) {
  if (token) {
    return (
      <main>
        <header></header>
        <Navigation userId={userId} token={token} />
        <div> {user.username}</div>
        <div className="credit-display">{user.credits}</div>
        <div>{user.corporation}</div>
        <div>{user.accessLevel}</div>
      </main>
    );
  } else {
    return <Redirect to="/login" />;
  }
}

export default UserProfile;
