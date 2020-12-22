import React from "react";
import Navigation from "../components/Navigation";
import "./AuditLog.css";

function AuditLog({ userId, token }) {
  return (
    <main className="audit-page">
      <header>Audit Log</header>
      <Navigation userId={userId} token={token} />
      <div>Audit Log Area</div>
    </main>
  );
}

export default AuditLog;
