import React from "react";

function AddEditUserForm({}) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [corporation, setCorporation] = React.useState("");
  const [accessLevel, setAccessLevel] = React.useState("User");
  const [credits, setCredits] = React.useState(0);

  const [errors, setErrors] = React.useState({
    username: null,
    password: null,
    corporation: null,
    accessLevel: null,
    credits: null,
  });

  const corporationList = [
    "Legion",
    "Gunsmoke",
    "Banterland",
    "Hellbent",
    "Spice Runners",
    "Gods of War",
    "Quetzalcóatl Nation",
    "Blue Castle Labs",
  ];

  function handleSubmit(event) {
    const errors = {
      username: null,
      password: null,
      corporation: null,
      accessLevel: null,
      credits: null,
    };

    if (username.length === 0) {
      errors.name = "Username cannot be empty";
    }
    if (password.length < 8) {
      errors.password = "Password cannot be less than 8 characters";
    }
    if (password.length === 0) {
      errors.password = "Password cannot be empty";
    }
    if (!corporationList.includes(corporation)) {
      errors.corporation ===
        `We do not have a corporation named ${corporation}`;
    }

    if (
      errors.username ||
      errors.password ||
      errors.corporation ||
      errors.accessLevel ||
      errors.credits
    ) {
      setErrors(errors);
      return;
    }
  }
}
