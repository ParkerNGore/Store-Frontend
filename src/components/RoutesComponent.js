import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "../containers/HomePage";
import Login from "../containers/Login";
import ResetPassword from "../containers/ResetPassword";
import Store from "../containers/Store";
import AuditLog from "../containers/AuditLog";
import UserProfile from "../containers/UserProfile";

function RoutesComponent({ user, userId, token, updateToken }) {
  return (
    <Router>
      <Route exact path="/">
        <HomePage userId={userId} token={token} />
      </Route>
      <Route exact path="/login">
        <Login userId={userId} token={token} updateToken={updateToken} />
      </Route>
      <Route exact path="/resetpassword">
        <ResetPassword userId={userId} token={token} />
      </Route>
      <Route exact path="/userprofile/:userId">
        <UserProfile user={user} userId={userId} token={token} />
      </Route>
      <Route exact path="/store">
        <Store userId={userId} token={token} />
      </Route>
      <Route exact path="/auditlog">
        <AuditLog userId={userId} token={token} />
      </Route>
    </Router>
  );
}

export default RoutesComponent;
