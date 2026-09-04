import { useState } from "react";

export default function Acordeon({ titulo, contenido }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div>
      <h2 onClick={() => setAbierto(!abierto)}>
        {titulo} {abierto ? "▲" : "▼"}
      </h2>
      {abierto && 
      <p>{contenido}</p>
      }
    </div>
  );
}