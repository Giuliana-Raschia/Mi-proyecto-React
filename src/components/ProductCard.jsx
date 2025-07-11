import React from "react";
import "../styles/Products.css";

function ProductCard({ imagen, nombre, precio, descripcion }) {
  return (
    <div className="tarjeta-producto">
      <img src={imagen} alt={nombre} />
      <h2 className="nombre-producto">{nombre}</h2>
      <h3 className="precio-producto">{precio}</h3>
      <p className="descripcion-producto">{descripcion}</p>
      <button className="boton-comprar">Comprar</button>
    </div>
  );
}

export default ProductCard;