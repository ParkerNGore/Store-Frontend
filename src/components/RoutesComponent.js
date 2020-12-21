import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "../containers/HomePage";
import Login from "../containers/Login";
import ResetPassword from "../containers/ResetPassword";
import Store from "../containers/Store";
import AuditLog from "../containers/AuditLog";
import UserProfile from "../containers/UserProfile";

function RoutesComponent({ userId, token, updateToken }) {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/userprofile/:userId" component={UserProfile} />
      <Route exact path="/resetpassword" component={ResetPassword} />
      <Route exact path="/store" component={Store} />
      <Route exact path="/auditlog" component={AuditLog} />
    </Router>
  );
}

export default RoutesComponent;
