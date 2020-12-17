import React from "react";
import Navigation from "../components/Navigation";
import "./AuditLog.css";

function AuditLog() {
  return (
    <main className="audit-page">
      <header>Audit Log</header>
      <Navigation />
      <div>Audit Log Area</div>
    </main>
  );
}

export default AuditLog;
