import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./checkout.css";

const templates = {
  restaurant: { name: "Restaurante Premium" },
  barber: { name: "Barbería Dark" },
  fitness: { name: "Fitness Dark" },
  bienes: { name: "Bienes Raíces" },
  automotive: { name: "Automotive" },
  professionals: { name: "Servicios Profesionales" }
};

function TemplateCheckout() {
  const { template } = useParams();
  const navigate = useNavigate();

  const selected = templates[template];

  const [form, setForm] = useState({
    businessName: "",
    phone: "",
    description: "",
    style: "moderno"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const sendWhatsApp = () => {
    const message = `
🚀 NUEVA SOLICITUD ENKO TECH

📌 Template: ${selected?.name}
🏢 Negocio: ${form.businessName}
📄 Descripción: ${form.description}
🎨 Estilo: ${form.style}
📞 Teléfono: ${form.phone}

Quiero mi página web lista.
`;

    const url = `https://wa.me/524421234567?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  if (!selected) {
    return (
      <div className="checkout-container">
        Template no encontrado
      </div>
    );
  }

  return (
    <div className="checkout-container">

      <div className="checkout-card">

        <h1>Checkout ENKO TECH</h1>

        <p className="subtitle">
          Estás creando tu web con:
          <strong> {selected.name}</strong>
        </p>

        <label>
          Nombre del negocio
          <input
            name="businessName"
            value={form.businessName}
            onChange={handleChange}
            placeholder="Ej: Barber Shop Elite"
          />
        </label>

        <label>
          Teléfono / WhatsApp
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+52..."
          />
        </label>

        <label>
          Descripción del negocio
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe tu negocio..."
          />
        </label>

        <label>
          Estilo visual
          <select
            name="style"
            value={form.style}
            onChange={handleChange}
          >
            <option value="moderno">Moderno</option>
            <option value="elegante">Elegante</option>
            <option value="minimal">Minimal</option>
            <option value="dark">Dark</option>
          </select>
        </label>

        <button
          className="btn-primary"
          onClick={sendWhatsApp}
        >
          Continuar por WhatsApp 🚀
        </button>

        <button
          className="btn-secondary"
          onClick={() => navigate("/")}
        >
          Volver al catálogo
        </button>

      </div>

    </div>
  );
}

export default TemplateCheckout;