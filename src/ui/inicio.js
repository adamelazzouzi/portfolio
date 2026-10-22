// ============================================
// UI - PANTALLA DE INICIO DEL PORTFOLIO
// ============================================

import { proyectos } from '../data/proyectos.js';

// ============================================
// CONFIGURACIÓN DEL CARRUSEL
// ============================================
const CARRUSEL_INTERVALO = 3000;

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
            const disponible = card.getAttribute('data-disponible') !== 'false';

            if (!disponible) {
                mostrarToast('Próximamente');
                return;
            }

            window.location.href = `proyecto.html?id=${id}`;
        });
    });
}

// ============================================
// RENDERIZAR UN PROYECTO (tarjeta)
// ============================================
function renderizarProyecto(proyecto) {
    const bloqueado = proyecto.disponible === false;

    // Visual: carrusel o imagen estática
    let visualHTML;
    if (proyecto.capturasCarrusel && proyecto.capturasCarrusel.length > 0) {
        visualHTML = `
            <div class="proyecto-visual">
                <div class="proyecto-carrusel" data-carrusel="${proyecto.id}">
                    ${proyecto.capturasCarrusel.map((src, i) => `
                        <img src="${src}" alt="${proyecto.nombre}" ${i === 0 ? 'class="activa"' : ''}>
                    `).join('')}
                </div>
                ${bloqueado ? '<div class="proyecto-candado">🔒</div>' : ''}
            </div>
        `;
    } else {
        visualHTML = `
            <div class="proyecto-visual">
                <img src="${proyecto.capturaInicio}" alt="${proyecto.nombre}" class="proyecto-imagen">
                ${bloqueado ? '<div class="proyecto-candado">🔒</div>' : ''}
            </div>
        `;
    }

    return `
        <article class="proyecto-card ${bloqueado ? 'proyecto-card-bloqueado' : ''}"
                 data-id="${proyecto.id}"
                 data-disponible="${proyecto.disponible !== false}">
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
                ${bloqueado ? '<p class="proyecto-bloqueado-texto">Próximamente</p>' : ''}
            </div>
        </article>
    `;
}

// ============================================
// CARRUSELES
// ============================================
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

// ============================================
// TOAST
// ============================================
let toastTimeout = null;

function mostrarToast(texto) {
    // Eliminar toast anterior si existe
    const anterior = document.getElementById('toast');
    if (anterior) anterior.remove();

    if (toastTimeout) {
        clearTimeout(toastTimeout);
        toastTimeout = null;
    }

    // Crear toast
    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    toast.textContent = texto;
    document.body.appendChild(toast);

    // Animación de entrada
    requestAnimationFrame(() => {
        toast.classList.add('toast-visible');
    });

    // Auto-eliminar a los 2.5s
    toastTimeout = setTimeout(() => {
        toast.classList.remove('toast-visible');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}