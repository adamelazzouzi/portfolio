// ============================================
// UI - PÁGINA DE MINIJUEGOS
// Lista de todos los juegos disponibles
// ============================================

import { proyectos } from '../data/proyectos.js';

const CARRUSEL_INTERVALO = 3000;

export function montarMinijuegos(contenedor) {
    const juegos = proyectos.filter(p => p.tipo === 'juego');

    contenedor.innerHTML = `
        <header class="seccion-header">
            <a href="index.html" class="seccion-volver">← Volver</a>
            <h1 class="seccion-titulo-header">Minijuegos</h1>
            <p class="seccion-subtitulo-header">${juegos.length} juegos interactivos</p>
        </header>

        <main class="proyectos-grid">
            ${juegos.map(juego => renderizarJuego(juego)).join('')}
        </main>

        <footer class="inicio-footer">
            <p>Proyecto personal. Construido sin frameworks, sin dependencias.</p>
        </footer>
    `;

    iniciarCarruseles();

    contenedor.querySelectorAll('.proyecto-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            window.location.href = `proyecto.html?id=${id}`;
        });
    });
}

function renderizarJuego(juego) {
    const visualHTML = `
        <div class="proyecto-visual">
            <div class="proyecto-carrusel">
                ${juego.capturasCarrusel.map((src, i) => `
                    <img src="${src}" alt="${juego.nombre}" ${i === 0 ? 'class="activa"' : ''}>
                `).join('')}
            </div>
        </div>
    `;

    return `
        <article class="proyecto-card" data-id="${juego.id}">
            ${visualHTML}
            <div class="proyecto-info">
                <div class="proyecto-header">
                    <h3 class="proyecto-nombre">${juego.nombre}</h3>
                    <span class="proyecto-año">${juego.año}</span>
                </div>
                <p class="proyecto-descripcion">${juego.descripcionCorta}</p>
            </div>
        </article>
    `;
}

let intervalosCarrusel = [];

function iniciarCarruseles() {
    intervalosCarrusel.forEach(id => clearInterval(id));
    intervalosCarrusel = [];

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