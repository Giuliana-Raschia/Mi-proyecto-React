import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-mg">
          <img src="../img/m&g.png" alt="Logo M&G" />
        </div>
        <ul className="info-footer">
          <li><i className="fa-solid fa-location-dot"></i> Roque Pérez, Bs As |</li>
          <li><i className="fa-brands fa-whatsapp"></i> 2227-321942 |</li>
          <li><i className="fa-brands fa-instagram"></i> @match&glam_ |</li>
          <li><i className="fa-solid fa-envelope"></i> match&glam@gmail.com</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;