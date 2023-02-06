import React, { useState } from "react";
import { useHistory } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  async function signUp() {
    let item = { name, email, password };
    console.warn(item);

    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user-infor", JSON.stringify(result));
    history.push("/add");
  }
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Strana za registraciju</h1>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        className="form-control"
        placeholder="Ime i prezime"
      />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        placeholder="E-mail"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        placeholder="Lozinka"
      />
      <br />
      <button onClick={signUp} className="btn btn-primary">
        Prijavi se
      </button>
    </div>
  );
}

export default Register;
