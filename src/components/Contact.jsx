import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    console.log(`Campo ${name} actualizado: ${value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado con los siguientes datos:", formData);
    alert("Formulario enviado correctamente (simulado).");
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      direccion: "",
      mensaje: ""
    });
  };

  const handleReset = () => {
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      direccion: "",
      mensaje: ""
    });
    console.log("Formulario reseteado.");
  };

  return (
    <section className="contacto">
      <div className="redes-sociales">
        <h2>¡Seguinos en nuestras redes!</h2>
        <div className="iconos-redes">
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src="/img/logo-tiktok.png" alt="TikTok" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/img/logo-instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/img/logo-x.png" alt="Twitter" />
          </a>
        </div>
      </div>

      <div className="formulario-contacto">
        <h3>Por sugerencias o consultas contactanos</h3>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            required
            value={formData.apellido}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
          />
          <input
            type="text"
            name="direccion"
            placeholder="Dirección"
            required
            value={formData.direccion}
            onChange={handleChange}
          />
          <textarea
            name="mensaje"
            placeholder="Escribí tu mensaje..."
            rows="5"
            required
            value={formData.mensaje}
            onChange={handleChange}
          ></textarea>
          <div className="botones-form">
            <button type="submit">Enviar</button>
            <button type="reset">Resetear</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
