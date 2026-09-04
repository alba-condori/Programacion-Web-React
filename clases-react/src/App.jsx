import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Perfil from "./components/Perfil";
import TarjetaPelicula from "./components/TarjetaPelicula";
import Acordeon from "./components/Acordeon";

const peliculas = [
  { id: 1, titulo: "Interstellar", año: 2014, vista: false },
  { id: 2, titulo: "The Dark Knight", año: 2008, vista: true },
  { id: 3, titulo: "Inception", año: 2010, vista: false },
  { id: 4, titulo: "Oppenheimer", año: 2023, vista: true },
];

function App() {
  const [cuenta, setCuenta] = useState(0);

  const restar = () => {
    if (cuenta > 0) {
      setCuenta(cuenta - 1);
    } else {
      setCuenta(0)
    }
  };

  return (
    <>
      <h2>Contador:</h2>
      <div>
        <p>{cuenta}</p>
        <button onClick={() => setCuenta(cuenta + 1)}>Sumar</button>
        <button onClick={() => setCuenta(restar)}>Restar</button>
        <button onClick={() => setCuenta(0)}>Reiniciar</button>
      </div>

      <h1>React - Ejercicios</h1>
      <Perfil
        nombre="Ana"
        rol="Desarrolladora"
        lenguajes={["JavaScript", "React", "CSS"]}
      />

      <Acordeon 
        titulo="Mi serie favorita es..." 
        contenido="When Life Give You Tangerines" 
      />

      {peliculas.map((pelicula) => (
        <TarjetaPelicula
          key={pelicula.id}
          titulo={pelicula.titulo}
          año={pelicula.año}
          vista={pelicula.vista}
        />
      ))}
    </>
  );
}

export default App;
