import React from "react";
import Navigation from "../components/Navigation";
import "./ResetPassword.css";

function ResetPassword({ userId, token }) {
  return (
    <main className="reset-page">
      <header>Reset Password</header>
      <Navigation userId={userId} token={token} />
      <div>Reset Password Area</div>
    </main>
  );
}

export default ResetPassword;
