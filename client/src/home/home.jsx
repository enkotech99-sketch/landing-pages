import { Link } from "react-router-dom";

import "../home/home.css";

const templates = [
  {
    title: "Restaurante",
    path: "/restaurant",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    description:
      "Diseño elegante para restaurantes, taquizas y experiencias gastronómicas."
  },
  {
    title: "Barbería",
    path: "/barber",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Landing moderna estilo editorial para barberías premium."
  },
  {
    title: "Servicios Profesionales",
    path: "/professionals",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    description:
      "Ideal para abogados, clínicas, consultorías y negocios corporativos."
  },
  {
    title: "Fitness",
    path: "/fitness",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    description:
      "Diseño deportivo con energía visual y enfoque en conversiones."
  },
  {
    title: "Bienes Raíces",
    path: "/bienes",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    description:
      "Landing premium para inmobiliarias y agentes inmobiliarios."
  },
  {
    title: "Taller",
    path: "/automotive",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    description:
      "Diseño automotriz premium para talleres y performance."
  }
];

function HomeLanding() {

  return (

    <div className="home-container">

      <header className="hero">

        <div className="hero-overlay" />

        <div className="hero-content">

          <span className="hero-badge">
            LANDINGS PROFESIONALES
          </span>

          <h1>
            Páginas web premium
            para negocios reales
          </h1>

          <p>
            Diseños modernos, optimizados para
            WhatsApp y listos para ayudarte
            a conseguir más clientes.
          </p>

          <div className="hero-actions">

            <a
              href="#templates"
              className="button primary"
            >
              Ver diseños
            </a>

            <a
              href="https://wa.me/?text=Hola%20quiero%20informaci%C3%B3n%20sobre%20una%20landing%20page"
              target="_blank"
              rel="noreferrer"
              className="button whatsapp"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </header>

      <section
        className="templates-section"
        id="templates"
      >

        <div className="section-header">

          <span>Templates</span>

          <h2>
            Elige el estilo ideal
            para tu negocio
          </h2>

          <p>
            Todas las páginas incluyen
            diseño responsive, integración
            con WhatsApp y soporte.
          </p>

        </div>

        <div className="template-grid">

          {templates.map((template, index) => (

            <article
              key={index}
              className="template-card"
            >

              <div className="template-image-wrapper">

                <img
                  src={template.image}
                  alt={template.title}
                />

              </div>

              <div className="template-content">

                <h3>{template.title}</h3>

                <p>{template.description}</p>

                <Link
                  to={template.path}
                  className="button secondary"
                >
                  Ver demo
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>

      <section className="benefits-section">

        <div className="benefit-card">
          <strong>✓ Diseño premium</strong>
          <p>
            Interfaces modernas listas
            para impresionar clientes.
          </p>
        </div>

        <div className="benefit-card">
          <strong>✓ WhatsApp integrado</strong>
          <p>
            Facilita que tus clientes
            contacten directamente.
          </p>
        </div>

        <div className="benefit-card">
          <strong>✓ Entrega rápida</strong>
          <p>
            Sitios listos en poco tiempo
            sin procesos complicados.
          </p>
        </div>

      </section>

      <section className="pricing-section">

        <div className="pricing-card">

          <span>PLAN INICIAL</span>

          <h2>$800 MXN</h2>

          <p>
            Implementación inicial +
            publicación de tu sitio web.
          </p>

          <ul>
            <li>Landing responsive</li>
            <li>Botón WhatsApp</li>
            <li>Hosting incluido</li>
            <li>Dominio personalizado</li>
          </ul>

        </div>

        <div className="pricing-card featured">

          <span>MANTENIMIENTO</span>

          <h2>$250 MXN</h2>

          <p>
            Hosting, soporte y mantenimiento
            mensual sin complicaciones.
          </p>

          <ul>
            <li>Hosting activo</li>
            <li>Renovación de dominio</li>
            <li>Soporte técnico</li>
            <li>Cancelación libre</li>
          </ul>

        </div>

      </section>

      <footer className="footer">

        <p>
          © 2026 Landing Studio ·
          Diseño web profesional
        </p>

      </footer>

    </div>

  );

}

export default HomeLanding;