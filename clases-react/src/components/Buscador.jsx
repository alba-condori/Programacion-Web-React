import { useState } from "react";

const frutas = ["manzana", "pera", "naranja", "banana", "kiwi", "mango"];

export default function Buscador() {

  const [busqueda, setBusqueda] = useState(""); 
  
  const textoBuscado = busqueda.toLowerCase();
  
  const frutasFiltradas = frutas.filter((fruta) => fruta.toLowerCase().includes(textoBuscado))
  
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar.."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <ul>
        {frutasFiltradas.map((fruta, index) => (
          <li key= {index}>{fruta}</li>
        ))}
      </ul>

    </div>

  );

}