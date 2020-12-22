import React from "react";
import "./Navigation.css";

function Navigation({ userId, token }) {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loggedInUserProfile, setLoggedInUserProfile] = React.useState(`/`);

  React.useEffect(() => {
    if (userId && token && loggedIn === false) {
      setLoggedIn(true);
      setLoggedInUserProfile(`/userprofile/${userId}`);
    }
    if (!userId || (!token && loggedIn === true)) {
      setLoggedIn(false);
      setLoggedInUserProfile(`/`);
    }
  }, [token, userId]);

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
        <a
          href={loggedIn ? `/${loggedInUserProfile}` : "/login"}
          className="home-nav"
        >
          {loggedIn ? "User Profile" : "Login"}
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
