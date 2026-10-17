// ============================================
// DATOS DE LOS PROYECTOS
//
// Para añadir un proyecto nuevo:
// 1. Añadir un objeto al array con todos los campos
// 2. Añadir las capturas en assets/capturas/
// 3. Listo
//
// Campos obligatorios:
//   id, nombre, descripcionCorta, descripcionLarga,
//   stack, año, capturasCarrusel, url
//
// Campos opcionales:
//   repo (link a GitHub)
// ============================================

export const proyectos = [
    {
        id: 'quevedle',
        nombre: 'Quevedle',
        descripcionCorta: 'Juego online para adivinar las canciones de Quevedo. 10 canciones, 10 segundos cada una.',
        descripcionLarga: 'Quevedle es un juego web que pone a prueba tu conocimiento del catálogo de Quevedo. En cada partida se escuchan 10 fragmentos de 5 segundos de canciones aleatorias y tienes que adivinar cuál es. Con 48 canciones de sus 3 álbumes (Donde Quiero Estar, Buenas Noches y El Baifo), cada partida es distinta. Sin registro, sin instalación, sin distracciones. Incluye una Quevedex para coleccionar las canciones que vas desbloqueando.',
        stack: ['HTML', 'CSS', 'JavaScript', 'Módulos ES', 'Cloudflare Pages'],
        año: 2026,
        capturasCarrusel: [
            'assets/capturas/dqe.jpg',
            'assets/capturas/bn.jpg',
            'assets/capturas/eb.jpg'
        ],
        url: 'https://quevedle.pages.dev',
        repo: 'https://github.com/adamelazzouzi/quevedle'
    },
    {
    id: 'la-panterle',
    nombre: 'La Panterle',
    descripcionCorta: 'Juego online para adivinar las canciones de La Pantera. 5 canciones, 15 segundos cada una.',
    descripcionLarga: 'La Panterle es un juego web que pone a prueba tu conocimiento del catálogo de La Pantera. En cada partida se escuchan 5 fragmentos de 5 segundos de canciones aleatorias y tienes que adivinarlas buscando su título. Con 20 canciones (singles, EPs y colaboraciones), cada partida es distinta. Sin registro, sin instalación, sin distracciones. Incluye una Panterlex para coleccionar las canciones que vas desbloqueando.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Módulos ES', 'Cloudflare Pages'],
    año: 2026,
    capturasCarrusel: [
        'assets/capturas/lp-pantera.jpg',
        'assets/capturas/lp-stone.jpg',
        'assets/capturas/lp-tafacil.jpg'
    ],
    url: 'https://la-panterle.pages.dev',
    repo: 'https://github.com/adamelazzouzi/la-panterle'
    }

    // ============================================
    // AÑADIR AQUÍ NUEVOS PROYECTOS
    // ============================================
];