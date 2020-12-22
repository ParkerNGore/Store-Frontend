import React from "react";
import Navigation from "../components/Navigation";
import "./HomePage.css";

function HomePage({ userId, token }) {
  return (
    <main className="home-page">
      <header>Homepage</header>
      <Navigation userId={userId} token={token} />
      <div>Homepage Area</div>
    </main>
  );
}

export default HomePage;
