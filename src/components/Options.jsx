import "../styles/Options.css";

function Options() {
  return (
    <section className="opciones-items">
      <div className="container-items">
        <div className="item">
          <i className="fa-solid fa-cart-shopping"></i>
          <div className="footer-item">
            <h3 className="texto">Productos</h3>
          </div>
        </div>
        <div className="item">
          <i className="fa-solid fa-envelope"></i>
          <div className="footer-item">
            <h3 className="texto">Novedades</h3>
          </div>
        </div>
        <div className="item">
          <i className="fa-solid fa-address-book"></i>
          <div className="footer-item">
            <h3 className="texto">Contacto</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Options;