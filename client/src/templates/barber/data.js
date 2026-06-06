const defaultData = {
  name: "Barber King Studio",
  tagline: "Cortes premium y estilo masculino en Querétaro",
  heroImage:
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",

  description:
    "Barbería premium especializada en fades, cortes modernos y cuidado de barba con estilo profesional.",

  about:
    "En Barber King Studio combinamos técnica, precisión y estilo. Creamos cortes personalizados para cada cliente en un ambiente cómodo, moderno y masculino.",

  highlights: [
    "Barberos expertos en fade y tijera",
    "Afeitado clásico con navaja",
    "Productos premium para barba",
    "Ambiente masculino y relajado"
  ],

  services: [
    {
      title: "Fade Premium",
      description: "Degradados limpios con precisión profesional."
    },
    {
      title: "Corte clásico",
      description: "Estilo tradicional con tijera y acabado perfecto."
    },
    {
      title: "Barba VIP",
      description: "Perfilado, diseño y tratamiento completo."
    }
  ],

  packages: [
    {
      title: "Corte Pro",
      price: "$250 MXN",
      description: "Corte completo con estilo personalizado.",
      bullets: ["Corte + estilo", "Lavado", "Peinado"]
    },
    {
      title: "Barba Clean",
      price: "$180 MXN",
      description: "Perfilado y cuidado de barba profesional.",
      bullets: ["Navaja", "Toalla caliente", "Aceites premium"]
    },
    {
      title: "Full Experience",
      price: "$380 MXN",
      description: "Corte + barba + experiencia completa.",
      bullets: ["Corte + barba", "Lavado", "Estilo completo"]
    }
  ],

  gallery: [
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80"
  ],

  testimonials: [
    {
      quote: "El mejor fade que me han hecho, muy profesionales.",
      author: "Carlos M."
    },
    {
      quote: "Ambiente limpio, moderno y excelente atención.",
      author: "Jorge R."
    }
  ],

  faq: [
    {
      question: "¿Trabajan con cita?",
      answer: "Sí, pero también atendemos sin cita según disponibilidad."
    },
    {
      question: "¿Cuánto dura un corte?",
      answer: "Entre 30 y 45 minutos dependiendo del estilo."
    },
    {
      question: "¿Hacen diseño de barba?",
      answer: "Sí, trabajamos diseño completo y perfilado."
    }
  ],

  stats: [
    { value: "5+", label: "años de experiencia" },
    { value: "2000+", label: "clientes atendidos" },
    { value: "99%", label: "satisfacción" }
  ],

  contact: {
    email: "contacto@barberking.com",
    phone: "+52 xxx xxx xxxx",
    whatsapp:
      "https://wa.me/?text=Hola%20quiero%20agendar%20una%20cita",
    address: "Querétaro, México"
  }
};

export default defaultData;