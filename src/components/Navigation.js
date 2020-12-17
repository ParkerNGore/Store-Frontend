import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <div className="left-nav">
        <a href="/" className="home-nav">
          Home
        </a>
        <a href="/store" className="home-nav">
          Store
        </a>
      </div>

      <div className="right-nav">
        <a href="/auditlog" className="home-nav">
          Audit Log
        </a>
        <a href="/login" className="home-nav">
          Login
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
