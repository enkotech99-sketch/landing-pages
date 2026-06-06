import { useEffect, useState, useRef } from "react";
import defaultData from "./data";
import { normalizeLanding } from "../../models/normalizeLanding";
import "../barber/barber.css";

function Barber() {
  const [business, setBusiness] = useState(null);
  const contactRef = useRef(null);
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    try {
      setBusiness(normalizeLanding(defaultData));
    } catch {
      setBusiness(normalizeLanding(defaultData));
    }
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Enviando...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact)
      });

      const result = await response.json();
      setStatus(result.message || "Mensaje enviado correctamente.");
      setContact({ name: "", email: "", message: "" });
    } catch {
      setStatus(
        "Esta es una versión de demostración. Contáctanos para implementar esta solución."
        //"Error al enviar el mensaje. Intenta de nuevo."
      );
    }
  };
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };

  if (!business) return null;

  return (
    <div className="barber-container">

      <div className="barber-overlay"></div>

      <div className="page-container">

        {/* HERO */}
        <header className="hero">

          <div className="hero-content">

            <div className="hero-badge">
              Premium Barber Studio
            </div>

            <h1>{business.name}</h1>

            <p className="hero-tagline">
              {business.tagline}
            </p>

            <p className="hero-description">
              {business.description}
            </p>

            <div className="hero-actions">

              <button
                className="button primary"
                onClick={scrollToContact}
              >
                Agendar cita
              </button>

              <button
                className="button secondary"
                onClick={scrollToContact}
              >
                Contacto
              </button>

            </div>

            {!!business.stats?.length && (
              <div className="stats-grid">

                {business.stats.map((s, i) => (
                  <div key={i} className="stat-card">
                    <h3>{s.value}</h3>
                    <span>{s.label}</span>
                  </div>
                ))}

              </div>
            )}

          </div>

          <div className="hero-image-wrapper">

            <div className="hero-image-glow"></div>

            <img
              src={business.heroImage}
              alt="barber"
              className="hero-image"
            />

          </div>

        </header>

        {/* ABOUT */}
        <section className="section about-section">

          <div>

            <span className="section-label">
              Nuestra esencia
            </span>

            <h2>Sobre nosotros</h2>

          </div>

          <div className="about-content">

            <p>{business.about}</p>

            {!!business.highlights?.length && (
              <div className="highlight-grid">

                {business.highlights.map((h, i) => (
                  <div key={i} className="highlight-card">

                    <span>✦</span>

                    <p>{h}</p>

                  </div>
                ))}

              </div>
            )}

          </div>

        </section>

        {/* SERVICES */}
        <section className="section">

          <div className="section-heading">

            <span className="section-label">
              Experiencia premium
            </span>

            <h2>Servicios</h2>

          </div>

          <div className="service-grid">

            {business.services.map((s, i) => (
              <div key={i} className="service-card">

                <div className="service-number">
                  0{i + 1}
                </div>

                <h3>{s.title}</h3>

                <p>{s.description}</p>

              </div>
            ))}

          </div>

        </section>

        {/* PACKAGES */}
        <section className="section">

          <div className="section-heading">

            <span className="section-label">
              Planes destacados
            </span>

            <h2>Paquetes</h2>

          </div>

          <div className="package-grid">

            {business.packages.map((p, i) => (
              <div key={i} className="package-card">

                <div className="package-top">

                  <h3>{p.title}</h3>

                  <div className="package-price">
                    {p.price}
                  </div>

                </div>

                <p>{p.description}</p>

              </div>
            ))}

          </div>

        </section>

        {/* GALLERY */}
        <section className="section">

          <div className="section-heading">

            <span className="section-label">
              Resultados reales
            </span>

            <h2>Galería</h2>

          </div>

          <div className="gallery-grid">

            {business.gallery.map((img, i) => (
              <div key={i} className="gallery-card">
                <img src={img} alt="gallery" />
              </div>
            ))}

          </div>

        </section>

        {/* FAQ */}
        {!!business.faq?.length && (
          <section className="section">

            <div className="section-heading">

              <span className="section-label">
                Dudas frecuentes
              </span>

              <h2>FAQ</h2>

            </div>

            <div className="faq-grid">

              {business.faq.map((f, i) => (
                <div key={i} className="faq-card">

                  <h3>{f.question}</h3>

                  <p>{f.answer}</p>

                </div>
              ))}

            </div>

          </section>
        )}

        {/* CONTACT */}
        <section
          className="section contact-wrapper"
          ref={contactRef}
        >

          <div className="section-heading">

            <span className="section-label">
              Reserva tu espacio
            </span>

            <h2>Contáctanos</h2>

          </div>

          <div className="contact-section">

            <div className="contact-card">

              <div className="contact-item">
                <span>Email</span>
                <strong>{business.contact.email}</strong>
              </div>

              <div className="contact-item">
                <span>Teléfono</span>
                <strong>{business.contact.phone}</strong>
              </div>


              <div className="contact-item">
                <span>Dirección</span>
                <strong>{business.contact.address}</strong>
              </div>

              <a
                className="button whatsapp"
                href={`https://wa.me/${business.contact.whatsapp}?text=Hola%20quiero%20agendar%20una%20cita`}
                target="_blank"
                rel="noreferrer"
              >
                Cotiza por WhatsApp
              </a>

            </div>

            <form
              className="contact-form" onSubmit={handleSubmit}
            >

              <input
                type="text"
                name="name"
                placeholder="Nombre"
              />

              <input
                type="email"
                name="email"
                placeholder="Correo"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Describe el servicio que buscas"
              ></textarea>

              <button
                type="submit"
                className="button primary"
              >
                Enviar correo
              </button>
              {status && <p className="status">{status}</p>}
            </form>

          </div>

        </section>

      </div>

    </div>
  );
}

export default Barber;