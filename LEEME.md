# Aesthetic Notes — Interior Styling · Web

Web hecha con Astro. Se publica gratis en Cloudflare Pages, que sí permite uso comercial.

## Publicarla (sin terminal)

1. Crea una cuenta gratis en **github.com** → **New repository** → nombre `aesthetic-notes` → crear.
2. Pulsa **"uploading an existing file"**, arrastra todo lo que hay *dentro* de esta carpeta y pulsa **Commit changes**.
3. Entra en **pages.cloudflare.com** (cuenta gratis) → **Create** → **Pages** → **Connect to Git** → elige `aesthetic-notes`.
4. En *Framework preset* elige **Astro** → **Save and Deploy**.
5. Quedará en `https://aesthetic-notes.pages.dev` (o el nombre que Cloudflare te asigne).

**Si la dirección final es otra** (o compras un dominio propio), cámbiala en dos sitios:
- `astro.config.mjs` → línea `site:`
- `public/robots.txt` → línea `Sitemap:`

## Para que Google te encuentre

1. **Google Search Console** (search.google.com/search-console): añade tu web y envía el mapa del sitio: `sitemap-index.xml`.
2. **Perfil de Empresa de Google** (business.google.com): crea la ficha como "Decorador de interiores", marca que das servicio a domicilio y añade las zonas: Barcelona, Vallès Occidental, Vallès Oriental, Maresme. Pon el enlace a la web.
3. **Enlaza la web** desde Instagram (bio) y desde tu perfil de Houzz.
4. **Pide reseñas** en Google a clientas contentas. Es lo que más ayuda en búsquedas locales.

## Cambiar cosas tú misma

- **Contacto (email / WhatsApp) y zonas:** `src/data/site.js`
- **Proyectos, textos, paletas y fotos de cada proyecto:** `src/data/proyectos.js`
- **Fotos:** carpeta `public/proyectos/`
- **Textos de la portada (servicios, pasos, sobre mí):** `src/pages/index.astro`

Puedes editar cualquier archivo directamente en GitHub (icono del lápiz).
Al guardar, Cloudflare vuelve a publicar la web sola en uno o dos minutos.

## Formulario de contacto (oct 2026)

- Las consultas llegan a tu email (`site.js` → `email`) a través de FormSubmit, que es gratis y no necesita cuenta.
- **La primera vez** que alguien envíe el formulario recibirás un email de FormSubmit: pulsa **Activate form**. A partir de entonces te llegan todas las consultas.
- Tras enviar, la clienta ve la página `/gracias/`.

## Agenda de la asesoría online

- Crea una página de reservas gratis en **cal.com** (o Calendly), conéctala a tu Google Calendar y copia el enlace.
- Pégalo en `src/data/site.js` → `reserva: '...'`. Los botones «Reservar» de la asesoría online abrirán tu agenda.
- Mientras esté vacío, los botones llevan al formulario con el servicio ya elegido.

## Privacidad

- Rellena `titular` y `nif` en `site.js`: solo aparecen en la página `/privacidad/`, nunca en la marca.
