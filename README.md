# Plantillas de Negocio

Plantilla básica para un sitio web genérico de negocio con frontend en React y backend en Node.js.
https://github.com/carlosna28/EnkoPlantillas
## Estructura

- `client/` - aplicación React creada con Vite.
- `server/` - backend en Node.js/Express.
- `server/business-data.json` - datos del negocio que puedes cambiar según el cliente.

## Cómo usar

1. Abre `server/business-data.json` y edita el nombre, descripción, servicios y datos de contacto.
2. Instala dependencias desde el root:
   - `npm install`
   - `npm run install-all`
3. Genera el frontend y ejecuta el servidor en un solo paso:
   - `npm run serve`

Esto construye el sitio React en `client/dist` y arranca el backend Express en el puerto `4000`.

### Exponer tu laptop a Internet

Para que tu laptop sirva la web desde Internet, puedes usar Cloudflare Tunnel o una herramienta similar.

Ejemplo con Cloudflare Tunnel:

1. Instala `cloudflared` siguiendo la guía de Cloudflare.
2. Arranca tu aplicación:
   - `npm run serve`
3. En otra terminal, ejecuta:
   - `cloudflared tunnel --url http://localhost:4000`
4. Copia la URL pública que te genere Cloudflare y compártela.

Así tu laptop será el servidor backend y el sitio estará accesible desde Internet mientras mantengas `npm run serve` activo.

> Si prefieres, puedo ayudarte a adaptar esto a `ngrok` o a un dominio propio con DNS dinámico.

## Base de datos

Para una página de presentación de negocio con información, servicios y formulario de contacto básico, no es necesaria una base de datos. Los datos del negocio pueden vivir en `server/business-data.json` y editarse a mano.

Recomiendo agregar una base de datos más adelante solo si necesitas:

- usuarios registrados o login
- pedidos o reservas
- historial de clientes
- administración de productos y stock

En ese caso puedes usar SQLite, MySQL, PostgreSQL o MongoDB en el backend.

# landing-pages
Plantilla básica para un sitio web genérico de negocio con frontend en React y backend en Node.js.
