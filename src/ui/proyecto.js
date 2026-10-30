// ============================================
// UI - PÁGINA DE PROYECTO
// ============================================

import { proyectos } from '../data/proyectos.js';

// ============================================
// CONFIGURACIÓN DEL CARRUSEL
// ============================================
const CARRUSEL_INTERVALO = 3000;

// ============================================
// MONTAR PROYECTO
// ============================================
export function montarProyecto(contenedor, proyectoId) {
    const proyecto = proyectos.find(p => p.id === proyectoId);

    // Si no existe → error
    if (!proyecto) {
        contenedor.innerHTML = `
            <header class="proyecto-header">
                <a href="index.html" class="proyecto-volver">← Volver</a>
            </header>
            <main class="proyecto-main">
                <h1 class="proyecto-titulo">Proyecto no encontrado</h1>
                <p class="proyecto-descripcion">El proyecto "${proyectoId}" no existe.</p>
                <a href="index.html" class="proyecto-btn proyecto-btn-primario">Volver al inicio</a>
            </main>
        `;
        return;
    }

    // Actualizar título de la pestaña
    document.title = `${proyecto.nombre} · Adam El Azzouzi`;

    // Determinar a qué sección volver
    const esPractica = proyecto.tipo === 'practica';
    const urlVolver = esPractica ? 'practicas.html' : 'minijuegos.html';
    const textoVolver = esPractica ? 'Prácticas' : 'Minijuegos';

    // Visual: carrusel solo si hay imágenes. Si no, no mostramos banner.
    let visualHTML = '';
    const tieneVisual = proyecto.capturasCarrusel && proyecto.capturasCarrusel.length > 0;

    if (tieneVisual) {
        visualHTML = `
            <div class="proyecto-banner-visual">
                <div class="proyecto-banner-carrusel" id="proyectoBannerCarrusel">
                    ${proyecto.capturasCarrusel.map((src, i) => `
                        <img src="${src}" alt="${proyecto.nombre}" ${i === 0 ? 'class="activa"' : ''}>
                    `).join('')}
                </div>
            </div>
        `;
    }

    const bannerClass = tieneVisual ? 'proyecto-banner' : 'proyecto-banner proyecto-banner-sin-visual';

    // Renderizar
    contenedor.innerHTML = `
        <header class="proyecto-header">
            <a href="${urlVolver}" class="proyecto-volver">← Volver a ${textoVolver}</a>
        </header>

        <main class="proyecto-main">
            <div class="${bannerClass}">
                <div class="proyecto-banner-texto">
                    <div class="proyecto-header-info">
                        <h1 class="proyecto-titulo">${proyecto.nombre}</h1>
                        <span class="proyecto-año">${proyecto.año}</span>
                    </div>

                    <p class="proyecto-descripcion-larga">${proyecto.descripcionLarga}</p>

                    <div class="proyecto-stack">
                        ${proyecto.stack.map(tech => `<span class="stack-tag">${tech}</span>`).join('')}
                    </div>

                    <div class="proyecto-acciones">
                        <a href="${proyecto.url}" target="_blank" rel="noopener" class="proyecto-btn proyecto-btn-primario">
                            Ver proyecto en vivo →
                        </a>
                        ${proyecto.repo ? `
                            <a href="${proyecto.repo}" target="_blank" rel="noopener" class="proyecto-btn proyecto-btn-secundario">
                                Ver código en GitHub
                            </a>
                        ` : ''}
                    </div>
                </div>

                ${visualHTML}
            </div>
        </main>
    `;

    // Arrancar carrusel del banner (si lo hay)
    if (tieneVisual) {
        iniciarCarruselBanner();
    }
}

// ============================================
// CARRUSEL DEL BANNER
// ============================================
let bannerInterval = null;

function iniciarCarruselBanner() {
    if (bannerInterval) {
        clearInterval(bannerInterval);
        bannerInterval = null;
    }

    const carrusel = document.getElementById('proyectoBannerCarrusel');
    if (!carrusel) return;

    const imagenes = carrusel.querySelectorAll('img');
    if (imagenes.length === 0) return;

    let indiceActual = 0;

    bannerInterval = setInterval(() => {
        imagenes[indiceActual].classList.remove('activa');
        indiceActual = (indiceActual + 1) % imagenes.length;
        imagenes[indiceActual].classList.add('activa');
    }, CARRUSEL_INTERVALO);
}