// ─────────────────────────────────────────────
//  PROYECTOS
//  - portada: foto de la tarjeta en la página principal.
//  - foco: qué parte de la foto se ve al recortar (ej. 'center 70%').
//  - fotos: en orden; la primera abre la página del proyecto.
//  - paleta: los colores que se muestran como franja.
// ─────────────────────────────────────────────

const f = (slug, nums) => nums.map((n) => `/proyectos/${slug}/${slug}-${String(n).padStart(2, '0')}.webp`);

export const proyectos = [
  {
    slug: 'salon-obra-nueva-marmol-terciopelo',
    portada: '/proyectos/va/va-05.webp',
    foco: '40% center',
    titulo: 'Obra nueva, alma serena',
    resumen: 'Mármol oscuro, terciopelo verde botella y un toque de latón para una obra nueva con carácter propio.',
    texto:
      'Una obra nueva impecable, pero fría. Buscamos calidez con piedra, textiles suaves y un verde botella profundo, y equilibramos con mármol oscuro y detalles en latón.',
    paleta: [
      ['Marfil', '#F3EFE8'],
      ['Piedra', '#C9BFB0'],
      ['Latón', '#B8925A'],
      ['Verde botella', '#1F3B34'],
      ['Mármol', '#3B3431'],
    ],
    fotos: f('va', [2, 1, 3, 6, 5, 7, 9, 8]),
  },
  {
    slug: 'salon-lino-roble-luz-natural',
    portada: '/proyectos/vp/vp-07.webp',
    foco: 'center center',
    titulo: 'Luz de lino',
    resumen: 'Lino, roble claro y el sol de la mañana dibujando sombras. Un salón que invita a quedarse.',
    texto:
      'Un espacio luminoso al que le faltaba calidez. Vestimos el sofá en lino crudo, sumamos mesas de roble en dos alturas y pocas piezas negras para dar estructura. El resto lo hace la luz.',
    paleta: [
      ['Crema', '#F5EFE6'],
      ['Lino', '#DDD0BD'],
      ['Roble claro', '#CFA97A'],
      ['Verde', '#5E8A4A'],
      ['Negro', '#1A1A1A'],
    ],
    fotos: f('vp', [5, 8, 9, 4, 7, 10, 3, 6]),
  },
  {
    slug: 'decoracion-calida-atardecer',
    portada: '/proyectos/ms/ms-02.webp',
    foco: 'center 55%',
    titulo: 'Cuando cae la tarde',
    resumen: 'Luz baja, velas y flores oscuras. Un espacio vivido, pensado para las noches tranquilas.',
    texto:
      'No todo es luz de mediodía. Este espacio está pensado para el atardecer: lino al trasluz, velas, flores en tonos ciruela y una terraza que se enciende cuando oscurece.',
    paleta: [
      ['Lino', '#EFE6DA'],
      ['Ámbar', '#C98A4B'],
      ['Ciruela', '#7A4A55'],
      ['Chocolate', '#4A3F3B'],
      ['Azul noche', '#2B3550'],
    ],
    fotos: f('ms', [2, 1, 3, 5]),
  },
  {
    slug: 'piso-urbano-balcon-luz-calida',
    portada: '/proyectos/ev/ev-05.webp',
    foco: '35% center',
    titulo: 'Ciudad y luz cálida',
    resumen: 'Un rincón urbano con balcón: roble, gris perla y azul marino con un susurro de malva.',
    texto:
      'Un salón-comedor pensado para la vida diaria: sofá claro, mesa de listones de roble, un gran espejo que multiplica la luz del balcón y un dormitorio en tonos malva y tostado.',
    paleta: [
      ['Blanco cálido', '#F6F2EC'],
      ['Gris perla', '#D8D6D2'],
      ['Roble', '#B98E5E'],
      ['Malva', '#9C8291'],
      ['Marino', '#1F2A44'],
    ],
    fotos: f('ev', [2, 4, 5, 1]),
  },
  {
    slug: 'piso-clasico-decoracion-sin-obras',
    portada: '/proyectos/pa/pa-10.webp',
    foco: '70% center',
    titulo: 'Lo clásico, respirando de nuevo',
    resumen: 'Parquet de siempre, puertas de madera y ni una obra. Solo textiles, luz y los toques justos de melocotón.',
    texto:
      'Un espacio de los de toda la vida, con parquet rojizo y carpintería de madera. Sin tocar nada de obra, lo aligeramos con blancos, lino y piezas en melocotón que dialogan con la madera en lugar de luchar contra ella.',
    paleta: [
      ['Blanco', '#FAF7F2'],
      ['Lino', '#E3D8C8'],
      ['Melocotón', '#E8B49A'],
      ['Madera', '#9C5A3C'],
      ['Verde', '#6E8B55'],
    ],
    fotos: f('pa', [10, 8, 7, 11, 2, 5, 3]),
  },
  {
    slug: 'casa-vistas-paleta-blanco-negro',
    portada: '/proyectos/br/br-14.webp',
    foco: '60% center',
    titulo: 'Abierto al paisaje',
    resumen: 'Ventanales, vistas y una paleta serena de blanco, lino y negro, con guiños de salvia y mostaza.',
    texto:
      'Un proyecto completo, del salón a los dormitorios infantiles. Cada estancia tiene su propio color, pero todas comparten la misma base: blancos rotos, textiles naturales y negro en pequeñas dosis.',
    paleta: [
      ['Blanco roto', '#F4F1EC'],
      ['Lino', '#D9CDBB'],
      ['Salvia', '#A9B39C'],
      ['Mostaza', '#D9A85B'],
      ['Negro', '#1E1E1E'],
    ],
    fotos: f('br', [10, 11, 13, 12, 7, 8, 14, 3, 4, 5, 6, 16]),
  },
];
