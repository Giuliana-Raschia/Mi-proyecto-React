import "../styles/About.css";

function About() {
  return (
    <section className="quienes-somos">
      <div className="img-merch">
        <img src="../img//img-presentacion.png" alt="Imagen presentación" />
      </div>
      <div className="texto-contenedor">
        <h2 className="titulos">¿Quienes somos?</h2>
        <p className="texto">
          Match & Glam es un emprendimiento que nace de la idea de ofrecer merchandising creativo, original
          y estético de padel como también informar sobre próximos eventos del deporte y darle visibilidad al mismo. ¿Te sumas?
        </p>
        <button className="conocer">Conocer los productos <i className="fa-solid fa-shop"></i></button>
      </div>
    </section>
  );
}

export default About;