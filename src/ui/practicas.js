// ============================================
// UI - PÁGINA DE PRÁCTICAS DE WEBS
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

        ${practicas.length === 0
            ? `<div class="contenedor"><div class="practicas-vacio">
                 <div class="practicas-vacio-icono">🌐</div>
                 <h2 class="practicas-vacio-titulo">Próximamente</h2>
                 <p class="practicas-vacio-descripcion">Estamos trabajando en las primeras prácticas de webs. Vuelve pronto.</p>
               </div></div>`
            : `<div class="contenedor">
                 <div class="practicas-grid">
                   ${practicas.map(practica => renderizarPractica(practica)).join('')}
                 </div>
               </div>`
        }

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