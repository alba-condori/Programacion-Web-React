export default function TarjetaPelicula(props) {
    const { tituloP, rolP, lenguajesP } = props;
    
    return (
        <>
            <div>
                <h2>El titulo de la pelicula es: {titulo} </h2>
                <h2>El año que salio la pelicula es: {año}</h2>
                <h2>La vista es: {vista}</h2>
            </div>
        </>
    )
}