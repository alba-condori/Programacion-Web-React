export default function Perfil({ nombre, rol, lenguajes }) {
  const { nombres, rols, lenguajess } = props;

  return (
    <>
      <div className="borde">
        <h1>Mi nombre es: {nombre}</h1>
        <h2>Mi rol es: {rol}</h2>
        <p>Quiero aprender estos tres lenguajes: </p>
        <ul>
          <li>{lenguajes[0]}</li>
          <li>{lenguajes[1]}</li>
          <li>{lenguajes[2]}</li>
        </ul>
      </div>
    </>
  );
}

{
  /*Creá un componente `Perfil` en `src/components/Perfil.jsx` que reciba las props `nombre`, `rol`, y `lenguajes` (un array de strings).

El componente debe mostrar los mismos datos del ejercicio anterior, pero dinámicamente desde las props.*/
}
