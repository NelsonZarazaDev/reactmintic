import React, { useState } from "react";

export default function UseState() {
  const [contador, SetContador] = useState(0);
  function aumentar() {
    SetContador(contador + 1);
  }
  function disminuir() {
    SetContador(contador - 1);
  }
  return (
    <div>
      <h2>Valor del contador {contador}</h2>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Dirminuir</button>
    </div>
  );
}
