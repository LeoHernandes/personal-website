import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [counter, setCounter] = useState<number>(0);
  const navigate = useNavigate();

  return (
    <>
      <h1>Página principal</h1>
      <br />
      <button onClick={() => setCounter(counter + 1)}>
        Clica aqui pra eu aumentar: {counter}
      </button>
      <br />
      <button onClick={() => navigate("/test")}>
        Clica pra mudar de página
      </button>
    </>
  );
}
