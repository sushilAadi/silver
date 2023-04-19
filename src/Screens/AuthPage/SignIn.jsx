import React, { useEffect } from "react";

export default function SignIn() {
  const login = () => {
    localStorage.setItem("login", true);
    window.location.href = "/";
  };

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <h1>SignIn</h1>
      <br />

      <button className="btn btn-primary" onClick={login}>
        Login
      </button>
      
    </div>
  );
}
