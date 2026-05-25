import { useEffect, useRef, useState } from "react";

import "../automotive/automotive.css";

import defaultData from "./data";

import { normalizeLanding } from "../../models/normalizeLanding";

function Automotive() {

  const [business, setBusiness] = useState(null);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const contactRef = useRef(null);

  useEffect(() => {

    try {

      setBusiness(
        normalizeLanding(defaultData)
      );

    } catch {

      setBusiness(
        normalizeLanding(defaultData)
      );

    }

  }, []);

  const handleSubmit = async (event) => {

    event.preventDefault();

    setStatus("Enviando...");

    try {

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
      });

      const result = await response.json();

      setStatus(
        result.message ||
        "Mensaje enviado correctamente."
      );

      setContact({
        name: "",
        email: "",
        message: ""
      });

    } catch {

      setStatus(
        "Error al enviar el mensaje."
      );

    }

  };

  const goToContact = () => {

    contactRef.current?.scrollIntoView({
      behavior: "smooth"
    });

  };

  if (!business) return null;

  return (

    <div className="automotive-container">

      <div className="page-container">

        <header className="hero">

          <div className="hero-copy">

            <span className="hero-badge">
              AUTOMOTIVE PERFORMANCE
            </span>

            <h1>{business.name}</h1>

            <p className="hero-tagline">
              {business.tagline}
            </p>

            <p className="hero-description">
              {business.description}
            </p>

            <div className="hero-actions">

              <a
                href={business.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="button primary"
              >
                Agendar servicio
              </a>

              <button
                className="button secondary"
                onClick={goToContact}
              >
                Contactar taller
              </button>

            </div>

            <div className="hero-stats">

              {business.stats.map((stat, index) => (

                <div
                  key={index}
                  className="stat-card"
                >

                  <strong>{stat.value}</strong>

                  <span>{stat.label}</span>

                </div>

              ))}

            </div>

          </div>

          <div className="hero-image-wrapper">

            <img
              src={business.heroImage}
              alt={business.name}
              className="hero-image"
            />

            <div className="hero-floating-card">

              <strong>
                Diagnóstico avanzado
              </strong>

              <span>
                Tecnología y precisión automotriz
              </span>

            </div>

          </div>

        </header>

        <section className="section about-section">

          <div className="section-header">

            <span>Nosotros</span>

            <h2>
              Ingeniería y experiencia automotriz
            </h2>

          </div>

          <div className="about-grid">

            <div className="about-copy">
              <p>{business.about}</p>
            </div>

            <div className="highlight-grid">

              {business.highlights.map((item, index) => (

                <article
                  key={index}
                  className="highlight-card"
                >

                  <span>+</span>

                  <p>{item}</p>

                </article>

              ))}

            </div>

          </div>

        </section>

        <section className="section">

          <div className="section-header">

            <span>Servicios</span>

            <h2>
              Soluciones automotrices premium
            </h2>

          </div>

          <div className="service-grid">

            {business.services.map((service, index) => (

              <article
                key={index}
                className="service-card"
              >

                <div className="service-number">
                  0{index + 1}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

              </article>

            ))}

          </div>

        </section>

        <section className="section">

          <div className="section-header">

            <span>Paquetes</span>

            <h2>
              Servicios especializados
            </h2>

          </div>

          <div className="package-grid">

            {business.packages.map((pkg, index) => (

              <article
                key={index}
                className="package-card"
              >

                <h3>{pkg.title}</h3>

                <div className="package-price">
                  {pkg.price}
                </div>

                <p>{pkg.description}</p>

                <a
                  href={business.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="button tertiary"
                >
                  Solicitar servicio
                </a>

              </article>

            ))}

          </div>

        </section>

        <section className="section">

          <div className="section-header">

            <span>Galería</span>

            <h2>
              Taller y vehículos
            </h2>

          </div>

          <div className="gallery-grid">

            {business.gallery.map((image, index) => (

              <div
                key={index}
                className="gallery-card"
              >

                <img
                  src={image}
                  alt={`gallery-${index}`}
                />

              </div>

            ))}

          </div>

        </section>

        <section
          className="section contact-section"
          ref={contactRef}
        >

          <div className="contact-card">

            <span>Contacto</span>

            <h2>
              Agenda una revisión profesional
            </h2>

            <p>
              Nuestro equipo puede ayudarte
              con mantenimiento, diagnóstico y
              optimización automotriz.
            </p>

            <div className="contact-info">

              <div>
                <strong>Email</strong>
                <p>{business.contact.email}</p>
              </div>

              <div>
                <strong>Teléfono</strong>
                <p>{business.contact.phone}</p>
              </div>

              <div>
                <strong>Dirección</strong>
                <p>{business.contact.address}</p>
              </div>

            </div>

            <a
              href={business.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="button whatsapp"
            >
              WhatsApp
            </a>

          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <h3>
              Solicita información
            </h3>

            <label>

              Nombre

              <input
                value={contact.name}
                onChange={(e) =>
                  setContact({
                    ...contact,
                    name: e.target.value
                  })
                }
                required
              />

            </label>

            <label>

              Correo electrónico

              <input
                type="email"
                value={contact.email}
                onChange={(e) =>
                  setContact({
                    ...contact,
                    email: e.target.value
                  })
                }
                required
              />

            </label>

            <label>

              Mensaje

              <textarea
                rows="6"
                value={contact.message}
                onChange={(e) =>
                  setContact({
                    ...contact,
                    message: e.target.value
                  })
                }
                required
              />

            </label>

            <button
              type="submit"
              className="button primary"
            >
              Enviar mensaje
            </button>

            {status && (
              <p className="status">
                {status}
              </p>
            )}

          </form>

        </section>

      </div>

    </div>

  );
}

export default Automotive;