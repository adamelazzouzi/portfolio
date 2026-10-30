// ============================================
// UI - PÁGINA DE PRÁCTICAS DE WEBS
// Lista de todas las prácticas (vacía por ahora)
// ============================================

import { proyectos } from '../data/proyectos.js';

export function montarPracticas(contenedor) {
    const practicas = proyectos.filter(p => p.tipo === 'practica');

    contenedor.innerHTML = `
        <header class="seccion-header">
            <a href="index.html" class="seccion-volver">← Volver</a>
            <h1 class="seccion-titulo-header">Prácticas de Webs</h1>
            <p class="seccion-subtitulo-header">${practicas.length} webs de negocios ficticios</p>
        </header>

        <main class="proyectos-grid">
            ${practicas.length === 0
                ? `<div class="practicas-vacio">
                     <div class="practicas-vacio-icono">🌐</div>
                     <h2 class="practicas-vacio-titulo">Próximamente</h2>
                     <p class="practicas-vacio-descripcion">Estamos trabajando en las primeras prácticas de webs. Vuelve pronto.</p>
                   </div>`
                : practicas.map(practica => renderizarPractica(practica)).join('')
            }
        </main>

        <footer class="inicio-footer">
            <p>Proyecto personal. Construido sin frameworks, sin dependencias.</p>
        </footer>
    `;
}

function renderizarPractica(practica) {
    return `
        <article class="proyecto-card" data-id="${practica.id}">
            <div class="proyecto-visual">
                <img src="${practica.capturasCarrusel[0]}" alt="${practica.nombre}" class="proyecto-imagen">
            </div>
            <div class="proyecto-info">
                <div class="proyecto-header">
                    <h3 class="proyecto-nombre">${practica.nombre}</h3>
                    <span class="proyecto-año">${practica.año}</span>
                </div>
                <p class="proyecto-descripcion">${practica.descripcionCorta}</p>
            </div>
        </article>
    `;
}