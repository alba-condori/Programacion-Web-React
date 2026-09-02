export default function Perfil(props) {
  const { nombre, rol, lenguajes } = props;

  return (
    <>
      <div className="borde">
        <h1>{nombre}</h1>
        <h2>{rol}</h2>
        <p>Quiero aprender estos tres lenguajes: </p>
        {lenguajes.map((lenguaje, index) => (
          <div key={index}>
            <p>{lenguaje}</p>
          </div>
        ))}
      </div>
    </>
  );
}

{
  /*Creá un componente `Perfil` en `src/components/Perfil.jsx` que reciba las props `nombre`, `rol`, y `lenguajes` (un array de strings).

El componente debe mostrar los mismos datos del ejercicio anterior, pero dinámicamente desde las props.*/
}
