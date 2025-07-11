import "../styles/Home.css";
import Gallery from "../components/Gallery";

function Home() {
  const imagenesDestacadas = [
    { src: "../img/cartuchera-m&g.png", alt: "Cartuchera" },
    { src: "../img/botella-m&g.png", alt: "Botella" },
    { src: "../img/Llavero-m&g.png", alt: "Llavero" },
    { src: "../img/vaso-m&g.png", alt: "Vaso" },
    { src: "../img/Buzo-rosa.png", alt: "Buzo rosa" },
    { src: "../img/visera-m&g.png", alt: "Visera" },
  ];

  return (
    <>
      <section className="presentacion">
        <div className="container-presentacion">
          <div className="textos-presentacion">
            <h1 className="titulos">Match & Glam</h1>
            <h2 className="subtitulo">[ Padel Store ]</h2>
            <p className="slogan">El deporte que amás, el merch que necesitas!</p>
          </div>
          <div className="foto-presentacion">
            <img src="../img/Buzo-m&g.png" alt="Imagen destacada" />
          </div>
        </div>
      </section>

      <Gallery imagenes={imagenesDestacadas} />
    </>
  );
}



export default Home;