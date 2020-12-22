import React from "react";
import Navigation from "../components/Navigation";
import "./Store.css";

function Store({ userId, token }) {
  return (
    <main className="store-page">
      <header>Store Page</header>
      <Navigation userId={userId} token={token} />
      <div>Store Area</div>
    </main>
  );
}

export default Store;
