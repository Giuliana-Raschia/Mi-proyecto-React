import "../styles/Gallery.css";

function Gallery() {
  return (
    <section className="galeria-destacados">
      <h2 className="titulos">Conocé nuestros productos destacados <i className="fas fa-star"></i></h2>
      <div className="container-galeria">
        <img src="../img/cartuchera-m&g.png" className="item-galeria item1" alt="Cartuchera" />
        <img src="../img/botella-m&g.png" className="item-galeria item2" alt="Botella" />
        <img src="../img/Llavero-m&g.png" className="item-galeria item3" alt="Llavero" />
        <img src="../img/vaso-m&g.png" className="item-galeria item4" alt="Vaso" />
        <img src="../img/Buzo-rosa.png" className="item-galeria item5" alt="Buzo rosa" />
        <img src="../img/visera-m&g.png" className="item-galeria item6" alt="Visera" />
      </div>
      <button className="ver-mas texto">Ver más <i className="fa-solid fa-arrow-right"></i></button>
    </section>
  );
}

export default Gallery;