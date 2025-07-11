import "../styles/Gallery.css";

function Gallery({ imagenes }) {
  return (
    <section className="galeria-destacados">
      <h2 className="titulos">
        Conocé nuestros productos destacados <i className="fas fa-star"></i>
      </h2>
      <div className="container-galeria">
        {imagenes.map((imagen, index) => (
          <img
            key={index}
            src={imagen.src}
            className={`item-galeria item${index + 1}`}
            alt={imagen.alt}
          />
        ))}
      </div>
      <button className="ver-mas texto">
        Ver más <i className="fa-solid fa-arrow-right"></i>
      </button>
    </section>
  );
}

export default Gallery;