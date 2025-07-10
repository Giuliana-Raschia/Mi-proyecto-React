import "../styles/Home.css";

function Home() {
  return (
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
  );
}

export default Home;