import React from "react";
import Navigation from "../components/Navigation";
import "./Login.css";
import { userLogin } from "../UserService";

function Login({ userId, token, updateToken }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleLogin(event) {
    event.preventDefault();

    const user = {
      username,
      password,
    };

    userLogin(user)
      .then((res) => {
        const authToken = res.headers.auth;
        const userId = res.data._id;

        localStorage.setItem("auth", authToken);
        localStorage.setItem("userId", userId);

        updateToken();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <main className="login-page">
      <header>Login</header>
      <Navigation userId={userId} token={token} />

      <form onSubmit={handleLogin} className="login-form">
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            value={password}
            minLength="8"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default Login;
