import { useEffect, useState, useRef } from "react";
import { normalizeLanding } from "../../models/normalizeLanding";
import defaultData from "../restaurant/data";
import "./restaurant.css";

function App() {
  const [business, setBusiness] = useState(null);
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const contactRef = useRef(null);

  // inicialización limpia
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/api/business-info");
        const apiData = await response.json();

        const normalized = normalizeLanding(apiData);
        setBusiness(normalized);
      } catch {
        const normalized = normalizeLanding(defaultData);
        setBusiness(normalized);
      }
    };

    loadData();
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

  const handleQuickAction = (message) => {
    setContact((current) => ({ ...current, message }));
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // evita crash si aún no carga
  if (!business) return null;

  return (
    <div className="restaurant-container">
      <div className="page-container">

        {/* HERO */}
        <header className="hero">
          <div className="hero-copy">
            <span className="hero-eyebrow">{business.tagline}</span>
            <h1>{business.name}</h1>
            <p>{business.description}</p>

            <div className="hero-actions">
              <button
                className="button primary"
                onClick={() =>
                  handleQuickAction("Quiero cotizar una taquiza premium para mi evento.")
                }
              >
                Cotizar ahora
              </button>

              <button
                className="button secondary"
                onClick={() =>
                  handleQuickAction("Quiero reservar un servicio de taquiza para boda.")
                }
              >
                Reservar evento
              </button>
            </div>

            <div className="hero-stats">
              {business.stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-image-card">
            <img
              src={business.heroImage}
              alt={business.name}
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80";
              }}
            />

            <div className="hero-image-label">
              Eventos premium · Bodas · Corporativos · Fiestas
            </div>
          </div>
        </header>

        {/* ABOUT */}
        <section className="section about-section">
          <div className="section-copy">
            <h2>Una taquiza hecha para impresionar</h2>
            <p>{business.about}</p>
          </div>

          <div className="highlight-grid">
            {business.highlights.map((item, index) => (
              <article key={index} className="highlight-card">
                <span>•</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        {/* PACKAGES */}
        <section className="section packages-section">
          <div className="section-header">
            <h2>Paquetes destacados</h2>
            <p>Elige el nivel de servicio ideal para tu evento.</p>
          </div>

          <div className="package-grid">
            {business.packages.map((pkg, index) => (
              <article key={index} className="package-card">
                <h3>{pkg.title}</h3>
                <p className="package-price">{pkg.price}</p>
                <p>{pkg.description}</p>

                <ul>
                  {pkg.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <button
                  className="button tertiary"
                  onClick={() =>
                    handleQuickAction(`Estoy interesado en el paquete ${pkg.title}`)
                  }
                >
                  Solicitar cotización
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="section services-section">
          <div className="section-header">
            <h2>Servicios</h2>
            <p>Soluciones para todo tipo de evento.</p>
          </div>

          <div className="service-grid">
            {business.services.map((s, i) => (
              <article key={i} className="service-card">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className="section gallery-section">
          <div className="section-header">
            <h2>Galería</h2>
          </div>

          <div className="gallery-grid">
            {business.gallery.map((img, i) => (
              <div key={i} className="gallery-card">
                <img src={img} alt={`galeria-${i}`} />
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section testimonials-section">
          <h2>Clientes satisfechos</h2>

          <div className="testimonial-grid">
            {business.testimonials.map((t, i) => (
              <article key={i} className="testimonial-card">
                <p>“{t.quote}”</p>
                <span>{t.author}</span>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section" ref={contactRef}>
          <div className="contact-card">
            <h2>Contacto</h2>
            <p>{business.contact.address}</p>
            <p>{business.contact.phone}</p>
            <p>{business.contact.email}</p>

            <a
              className="button whatsapp"
              href={business.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Cotiza</h2>

            <label>
              Nombre
              <input
                value={contact.name}
                onChange={(e) =>
                  setContact({ ...contact, name: e.target.value })
                }
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                value={contact.email}
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
                required
              />
            </label>

            <label>
              Mensaje
              <textarea
                value={contact.message}
                onChange={(e) =>
                  setContact({ ...contact, message: e.target.value })
                }
                required
              />
            </label>

            <button type="submit" className="button primary">
              Enviar
            </button>

            {status && <p className="status">{status}</p>}
          </form>
        </section>

      </div>
    </div>
  );
}

export default App;