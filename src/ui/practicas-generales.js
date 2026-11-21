// ============================================
// UI - PRÁCTICAS DE WEBS · VARIOS SECTORES
// ============================================

import { proyectos } from '../data/proyectos.js';

export function montarPracticasGenerales(contenedor) {
    const practicas = proyectos.filter(p => p.tipo === 'practica' && p.categoria === 'general');

    contenedor.innerHTML = `
        <header class="seccion-header">
            <a href="practicas.html" class="seccion-volver">← Volver a Prácticas</a>
            <h1 class="seccion-titulo-header">Varios Sectores</h1>
            <p class="seccion-subtitulo-header">${practicas.length} webs de negocios locales</p>
        </header>

        <div class="contenedor">
            <div class="practicas-grid">
                ${practicas.map(practica => renderizarPractica(practica)).join('')}
            </div>
        </div>

        <footer class="inicio-footer">
            <p>Proyecto personal. Construido sin frameworks, sin dependencias.</p>
        </footer>
    `;

    contenedor.querySelectorAll('.proyecto-card-practica').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            window.location.href = `proyecto.html?id=${id}`;
        });
    });
}

function renderizarPractica(practica) {
    return `
        <article class="proyecto-card-practica" data-id="${practica.id}">
            <div class="proyecto-info-practica">
                <div class="proyecto-header-practica">
                    <h3 class="proyecto-nombre">${practica.nombre}</h3>
                    <span class="proyecto-año">${practica.año}</span>
                </div>
                <p class="proyecto-descripcion">${practica.descripcionCorta}</p>
                <span class="proyecto-ver">Ver proyecto →</span>
            </div>
        </article>
    `;
}