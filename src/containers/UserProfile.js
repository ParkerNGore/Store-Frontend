import React from "react";
import { Link } from "react-router-dom";

function UserProfile({ user }) {
  return (
    <main>
      <div> {user.username}</div>
      <div className="credit-display">{user.credits}</div>
      <div>{user.corporation}</div>
      <div>{user.accessLevel}</div>
    </main>
  );
}

export default UserProfile;
