import { useState } from "react";

export default function ListaCompras() {
  const [productos, setProductos] = useState([
    { id: 1, texto: "Leche", comprado: false },
    { id: 2, texto: "Pan", comprado: false }]);
  
  const [nuevoProducto, setNuevoProducto] = useState("");

  // agregar producto
  function agregarProducto() {
    if (nuevoProducto.trim() === "") return;

    const objetoNuevo = {
      id: Date.now(),
      texto: nuevoProducto,
      comprado: false,
    };

    setProductos([...productos, objetoNuevo]);
    setNuevoProducto("");
  }

  // marcar que ya fue comprado
  function marcarComprado(id) {
    const listaActualizada = productos.map((producto) => {
      if (producto.id === id) {
        return { ...producto, comprado:!producto.comprado };
      }
      return producto;
    });
    setProductos(listaActualizada);
  }

  // eliminar
  function eliminarProducto(id) {
    const listaFiltrada = productos.filter((prod) => prod.id !== id);
    setProductos(listaFiltrada);
  }

  // contar pendientes
  const pendientes = productos.filter((prod) => !prod.comprado).length;

  return (
    <div>
      <h2>Lista de Compras</h2>
      
      <input
        type="text"
        placeholder="Agregar producto..."
        value={nuevoProducto}
        onChange={(e) => setNuevoProducto(e.target.value)}
      />
      <button onClick={agregarProducto}>Agregar</button>
    
      <p>Faltan comprar: {pendientes} ítems</p>
      
      <ul>
        {productos.map((prod) => (
          <li key={prod.id}>
            <input
              type="checkbox"
              checked={prod.comprado}
              onChange={() => marcarComprado(prod.id)}
            />

            {prod.comprado ? <s>{prod.texto}</s> : prod.texto} {/*//el "s" es pa que se tache*/}

            <button onClick={() => eliminarProducto(prod.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}