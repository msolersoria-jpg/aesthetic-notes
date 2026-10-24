// ─────────────────────────────────────────────
//  DATOS DE CONTACTO
//  Rellena los que quieras mostrar. Si un campo
//  está vacío, su botón no aparece en la web.
// ─────────────────────────────────────────────
export const site = {
  nombre: 'Aesthetic Notes & Co — Interior Styling',
  instagram: 'https://www.instagram.com/aestheticnotesandco/',
  houzz: '',     // enlace a tu perfil de Houzz (opcional; muestra tu apellido)
  google: '',    // enlace a tu Perfil de Empresa de Google (cuando esté verificado)
  email: 'hola@aestheticnotesandco.com',
  whatsapp: '',   // solo números con prefijo, ej. '34600000000'

  // Agenda de la asesoría online. Pega aquí el enlace de tu página de reservas
  // (por ejemplo https://cal.com/aestheticnotes/asesoria-online).
  // Mientras esté vacío, el botón "Reservar" lleva al formulario de contacto.
  reserva: 'https://cal.com/aestheticnotesandco/asesoria-online',
  // Primera llamada gratuita de 20 min (Cal.com)
  llamada: 'https://cal.com/aestheticnotesandco/primera-llamada',

  // Datos legales: solo aparecen en la página de privacidad (no en la marca).
  titular: 'Marta Soler Soria',
  nif: '47159719J',

  zona: 'Barcelona · Vallès · Maresme · Online',
  zonas: [
    { nombre: 'Barcelona ciudad', detalle: 'Todos los barrios' },
    { nombre: 'Vallès Occidental', detalle: 'Sabadell, Terrassa, Sant Cugat, Sant Quirze, Castellar, Rubí, Cerdanyola' },
    { nombre: 'Vallès Oriental', detalle: 'Granollers, Mollet, Cardedeu, La Garriga, Sant Celoni' },
    { nombre: 'Maresme', detalle: 'Mataró, Premià, El Masnou, Vilassar, Arenys, Alella' },
    { nombre: 'Online', detalle: 'Asesoría de decoración a distancia, en toda España' },
  ],
};

// Servicios que aparecen en el desplegable del formulario.
export const opcionesServicio = [
  ['decoracion', 'Decoración de mi casa'],
  ['color-textil', 'Asesoría de color y textil'],
  ['online', 'Asesoría online · Tu lista'],
  ['compras', 'Personal shopper · De compras juntas'],
  ['lo-hago-yo', 'Personal shopper · Lo hago yo'],
  ['marcas', 'Estilismo para marcas'],
  ['home-staging', 'Home staging'],
  ['otro', 'Otra cosa'],
];
