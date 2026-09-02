export default function TarjetaPelicula({ titulo, año, vista }) {
  /*function fueVista() {
    if (vista === true) {
      return "✓";
    } else {
      ("");
    }
  }*/

  return (
    <>
      <h1>
        {titulo}
        {vista ? "✓" : "nada"}
      </h1>
      <p>{año}</p>
      <p>{vista}</p>
    </>
  );
}
