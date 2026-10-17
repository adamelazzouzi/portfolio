// ============================================
// UI - PANTALLA DE INICIO DEL PORTFOLIO
// ============================================

import { proyectos } from '../data/proyectos.js';

// ============================================
// CONFIGURACIÓN DEL CARRUSEL
// ============================================
const CARRUSEL_INTERVALO = 3000; // 3 segundos

// ============================================
// MONTAR INICIO
// ============================================
export function montarInicio(contenedor) {
    contenedor.innerHTML = `
        <header class="inicio-header">
            <h1 class="inicio-titulo">Adam El Azzouzi</h1>
            <p class="inicio-subtitulo">Desarrollador web</p>
        </header>

        <main class="inicio-proyectos">
            <h2 class="inicio-seccion-titulo">Proyectos</h2>

            <div class="proyectos-grid">
                ${proyectos.map(proyecto => renderizarProyecto(proyecto)).join('')}
            </div>
        </main>

        <footer class="inicio-footer">
            <p>Proyecto personal. Construido sin frameworks, sin dependencias.</p>
        </footer>
    `;

    // Arrancar carruseles
    iniciarCarruseles();

    // Conectar clicks en las tarjetas
    contenedor.querySelectorAll('.proyecto-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            window.location.href = `proyecto.html?id=${id}`;
        });
    });
}

// ============================================
// RENDERIZAR UN PROYECTO (tarjeta)
// ============================================
function renderizarProyecto(proyecto) {
    // Si tiene capturas de carrusel, mostramos el carrusel
    // Si no, mostramos la captura estática
    let visualHTML;
    if (proyecto.capturasCarrusel && proyecto.capturasCarrusel.length > 0) {
        visualHTML = `
            <div class="proyecto-visual">
                <div class="proyecto-carrusel" data-carrusel="${proyecto.id}">
                    ${proyecto.capturasCarrusel.map((src, i) => `
                        <img src="${src}" alt="${proyecto.nombre}" ${i === 0 ? 'class="activa"' : ''}>
                    `).join('')}
                </div>
            </div>
        `;
    } else {
        visualHTML = `
            <div class="proyecto-visual">
                <img src="${proyecto.capturaInicio}" alt="${proyecto.nombre}" class="proyecto-imagen">
            </div>
        `;
    }

    return `
        <article class="proyecto-card" data-id="${proyecto.id}">
            ${visualHTML}

            <div class="proyecto-info">
                <div class="proyecto-header">
                    <h3 class="proyecto-nombre">${proyecto.nombre}</h3>
                    <span class="proyecto-año">${proyecto.año}</span>
                </div>
                <p class="proyecto-descripcion">${proyecto.descripcionCorta}</p>
                <div class="proyecto-stack">
                    ${proyecto.stack.map(tech => `<span class="stack-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </article>
    `;
}

// ============================================
// CARRUSELES
// ============================================
let intervalosCarrusel = [];

function iniciarCarruseles() {
    // Limpiar intervalos anteriores
    intervalosCarrusel.forEach(id => clearInterval(id));
    intervalosCarrusel = [];

    // Para cada carrusel en la página
    document.querySelectorAll('.proyecto-carrusel').forEach(carrusel => {
        const imagenes = carrusel.querySelectorAll('img');
        if (imagenes.length === 0) return;

        let indiceActual = 0;

        const interval = setInterval(() => {
            imagenes[indiceActual].classList.remove('activa');
            indiceActual = (indiceActual + 1) % imagenes.length;
            imagenes[indiceActual].classList.add('activa');
        }, CARRUSEL_INTERVALO);

        intervalosCarrusel.push(interval);
    });
}