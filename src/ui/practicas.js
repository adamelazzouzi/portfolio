// ============================================
// UI - HOME DE PRÁCTICAS DE WEBS
// 2 tarjetas grandes: Varios Sectores y Estudios y Agencias
// ============================================

import { proyectos } from '../data/proyectos.js';

export function montarPracticas(contenedor) {
    const practicas = proyectos.filter(p => p.tipo === 'practica');
    const generales = practicas.filter(p => p.categoria === 'general');
    const estudios = practicas.filter(p => p.categoria === 'estudios');

    contenedor.innerHTML = `
        <header class="seccion-header">
            <a href="index.html" class="seccion-volver">← Volver</a>
            <h1 class="seccion-titulo-header">Prácticas de Webs</h1>
            <p class="seccion-subtitulo-header">${practicas.length} webs de negocios ficticios</p>
        </header>

        <div class="practicas-secciones">
            <a href="practicas-generales.html" class="practica-seccion-card">
                <div class="practica-seccion-icono">🌐</div>
                <h2 class="practica-seccion-titulo">Varios Sectores</h2>
                <p class="practica-seccion-descripcion">${generales.length} webs de negocios locales de distintos sectores: librería, peluquería, taller, asador, tienda de discos y papelería.</p>
            </a>

            <a href="practicas-estudios.html" class="practica-seccion-card">
                <div class="practica-seccion-icono">🏢</div>
                <h2 class="practica-seccion-titulo">Estudios y Agencias</h2>
                <p class="practica-seccion-descripcion">${estudios.length} webs de estudios y agencias de servicios profesionales. Especialización en landing pages para empresas.</p>
            </a>
        </div>

        <footer class="inicio-footer">
            <p>Proyecto personal. Construido sin frameworks, sin dependencias.</p>
        </footer>
    `;
}