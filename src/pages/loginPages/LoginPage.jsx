import React, { useState } from "react";
import Swal from "sweetalert2";
import "./LoginPage.css"

export default function LoginPage() {
  const [username, setUsername] = useState("");
  // Codigo de Js
  function handleLoginClick() {
    if(username.trim() == '') {
      Swal.fire("Ingrese un nombre valido");
    } else {
      Swal.fire("Username");
    }
  }
  // Etiquetas de HTML
  return (
    <div className="login-container">
      <h2>Ejercicio de pruebas</h2>
      <input
        type="text"
        placeholder="Escribir nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLoginClick}>Iniciar sesion</button>
    </div>
  );
}
