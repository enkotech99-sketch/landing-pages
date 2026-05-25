# ENKO TECH - Landing Generator System

Sistema de generación rápida de páginas web para pequeños negocios utilizando templates reutilizables, formularios estructurados y despliegue simplificado.

---

# Objetivo

Crear un flujo semi automatizado para vender, generar y desplegar páginas web profesionales enfocadas en pequeños negocios locales.

---

# Modelo de negocio

```txt
Meta Ads
   ↓
WhatsApp
   ↓
Cliente interesado
   ↓
Mostrar catálogo de templates
   ↓
Cierre de venta
   ↓
Pago
   ↓
Formulario de recopilación de datos
   ↓
Generación automática de landing
   ↓
Deploy
   ↓
Mensualidad
```

---

# Propuesta de valor

ENKO TECH no compite directamente contra Wix o GoDaddy técnicamente.

La ventaja principal es:

- Atención personalizada por WhatsApp
- Configuración completa hecha por nosotros
- Sin conocimientos técnicos requeridos
- Entrega rápida
- Hosting y soporte incluidos
- Experiencia simplificada para negocios tradicionales

---

# Público objetivo

- Barberías
- Restaurantes
- Taquizas
- Talleres mecánicos
- Gimnasios
- Consultorías
- Negocios locales
- Emprendedores

---

# Arquitectura actual

## Frontend

Tecnologías utilizadas:

- React
- Vite
- React Router

Templates disponibles:

- Restaurante
- Barbería
- Servicios Profesionales
- Fitness
- Bienes Raíces
- Taller Mecánico

---

# Modelo unificado

```js
export const landingModel = {
  name: "",
  tagline: "",
  heroImage: "",
  description: "",
  about: "",
  highlights: [],
  services: [],
  packages: [],
  gallery: [],
  testimonials: [],
  faq: [],
  stats: [],
  contact: {
    email: "",
    phone: "",
    whatsapp: "",
    address: ""
  }
};
```

---

# Normalización de templates

```js
normalizeLanding(data)
```

Objetivos:

- Estandarizar datos
- Reutilizar templates
- Escalar más fácilmente
- Generar landings dinámicamente

---

# Backend actual

Tecnologías:

- Node.js
- Express

Endpoints actuales:

```txt
GET  /api/business-info
POST /api/contact
```

---

# Flujo actual de desarrollo

```txt
Template React
    ↓
data.js
    ↓
normalizeLanding()
    ↓
Landing renderizada
```

---

# Próximo objetivo

## Sistema de correos funcional

Agregar:

- Nodemailer
- Variables .env
- SMTP

Objetivo:

```txt
Formulario
   ↓
Correo ENKO TECH
   ↓
Lead recibido
```

---

# Estrategia recomendada

## Fase actual

NO construir todavía:

- Panel admin complejo
- Multi tenant enterprise
- AWS avanzado
- SaaS completo

SÍ construir:

- Flujo estable
- Validación de mercado
- Automatización básica
- Pipeline funcional

---

# Formularios

## Recomendación inicial

Usar Google Forms.

Ventajas:

- Fácil para clientes
- Compatible móvil
- Soporta imágenes
- Reduce backend complejo
- Se integra con Google Sheets
- Desarrollo rápido

---

# Flujo de formularios

```txt
Cliente llena Google Form
        ↓
Google Sheets recibe respuestas
        ↓
Script Node.js procesa respuestas
        ↓
Genera JSON compatible con landingModel
        ↓
Genera landing automáticamente
```

---

# Información solicitada al cliente

## Datos básicos

- Nombre del negocio
- WhatsApp
- Correo
- Dirección
- Descripción
- Tagline

## Contenido

- Servicios
- Paquetes
- Beneficios
- FAQ
- Testimonios

## Multimedia

- Logo
- Fotos
- Colores

## Template

- Restaurante
- Barbería
- Fitness
- etc.

---

# Generador automático

## Objetivo

Convertir respuestas del formulario en una landing funcional.

---

# Pipeline esperado

```txt
Google Forms
    ↓
Google Sheets
    ↓
Script Node.js
    ↓
JSON
    ↓
data.js
    ↓
Template React
    ↓
Build
    ↓
Deploy
```

---

# Estructura esperada

```txt
generated-sites/
 └── cliente-x/
      ├── src/
      ├── assets/
      ├── data.js
      └── deploy-ready
```

---

# Deploy

## Inicialmente

- Netlify
- Netlify Functions
- Deploy manual o semi automático

## Futuro

- AWS
- S3
- CloudFront
- Lambda
- Deploy completamente automatizado

---

# Monetización

## Pago inicial

```txt
$800 MXN
```

Incluye:

- Implementación
- Configuración
- Publicación

---

# Mensualidad

```txt
$250 MXN
```

Incluye:

- Hosting
- Dominio
- Soporte
- Mantenimiento básico

---

# Operación futura

Posibilidad de incorporar un operador de ventas.

Responsabilidades:

- Atender WhatsApp
- Mostrar templates
- Cerrar ventas
- Solicitar formularios

Pago:

- Comisión por web vendida

---

# Branding

Mantener relación con:

# ENKO TECH

Posibles divisiones:

- ENKO TECH Web
- ENKO Landing Studio
- ENKO Sites

---

# Estado actual

## Completado

- Templates funcionales
- Home catálogo
- WhatsApp integrado
- landingModel unificado
- React Router
- Backend base
- Arquitectura inicial

---

# Pendientes inmediatos

## Prioridad alta

- Configurar correos
- Crear Google Form
- Crear script JSON generator
- Publicar catálogo
- Lanzar nueva publicidad

---

# Visión

Construir un sistema escalable de generación rápida de landings para pequeños negocios en México utilizando templates reutilizables y automatización progresiva.

---

# Stack actual

## Frontend

- React
- Vite
- CSS modular por template

## Backend

- Node.js
- Express

## Posible infraestructura futura

- Netlify
- AWS
- S3
- CloudFront
- Lambda

---

# Estructura actual del frontend

```txt
src/
 ├── api/
 ├── home/
 ├── models/
 ├── routes/
 ├── templates/
 │    ├── automotive/
 │    ├── barber/
 │    ├── bienes/
 │    ├── fitness/
 │    ├── professionals/
 │    └── restaurant/
 ├── App.jsx
 └── main.jsx
```

---

# Objetivo técnico a mediano plazo

Construir un sistema capaz de:

```txt
Formulario
   ↓
JSON
   ↓
Template dinámico
   ↓
Build automático
   ↓
Deploy automático
```

---

# Enfoque actual

Priorizar:

- Conversión
- Validación de mercado
- Rapidez de entrega
- Simplicidad operativa

Antes de:

- Complejidad técnica avanzada
- Automatización enterprise
- SaaS completo
```