import "./App.css";
import Perfil from "./components/Perfil";
import TarjetaPelicula from "./components/TarjetaPelicula";

const peliculas = [
  { id: 1, titulo: "Interstellar", año: 2014, vista: false },
  { id: 2, titulo: "The Dark Knight", año: 2008, vista: true },
  { id: 3, titulo: "Inception", año: 2010, vista: false },
  { id: 4, titulo: "Oppenheimer", año: 2023, vista: true },
];

function App() {
  return (
    <>
      <h1>React - Ejercicios</h1>
      <Perfil
        nombre="Ana"
        rol="Desarrolladora"
        lenguajes={["JavaScript", "React", "CSS"]}
      />
    </>
  );
}

export default App;
