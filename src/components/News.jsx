import React from "react";
import "../styles/News.css";

function News() {
  return (
    <section className="novedades">
      <div className="textos-novedades">
        <h2 className="titulos">Conocé las últimas novedades del deporte</h2>
        <h3>El mejor padel del mundo llega a Buenos Aires, ¡y vamos a estar presentes!</h3>
        <p><i className="fa-solid fa-calendar"></i> Del 26 al 31 de mayo.</p>
        <p><i className="fa-solid fa-location-dot"></i> Av. Coronel Roca 3490, Cdad. Autónoma de Buenos Aires.</p>
        <p><i className="fa-solid fa-handshake"></i> Conocé a los mejores jugadores y visitá nuestro stand.</p>
        <img src="/img/novedades-flyer.webp" alt="Flyer del evento" />
      </div>

      <div className="galeria-novedades">
        <h2 className="titulos">No te lo podes perder...</h2>
        <img src="/img/novedades-1.avif" alt="Novedad 1" />
        <img src="/img/novedad-2.png" alt="Novedad 2" />
        <img src="/img/novedades-3.webp" alt="Novedad 3" />
        <img src="/img/novedades-4.webp" alt="Novedad 4" />
        <img src="/img/novedad-5.jpg" alt="Novedad 5" />
        <img src="/img/novedades-6.jpeg" alt="Novedad 6" />
        <img src="/img/novedad-7.jpg" alt="Novedad 7" />
      </div>
    </section>
  );
}

export default News;
