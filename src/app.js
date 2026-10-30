// ============================================
// APP - Punto de entrada
// Router simple: detecta en qué página estamos y monta lo que toca
// ============================================

import { montarInicio } from './ui/inicio.js';
import { montarMinijuegos } from './ui/minijuegos.js';
import { montarPracticas } from './ui/practicas.js';
import { montarProyecto } from './ui/proyecto.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // Detectar página por el nombre del archivo
    const path = window.location.pathname;
    const archivo = path.substring(path.lastIndexOf('/') + 1);

    if (archivo === 'minijuegos.html') {
        montarMinijuegos(app);
    } else if (archivo === 'practicas.html') {
        montarPracticas(app);
    } else if (archivo === 'proyecto.html') {
        const params = new URLSearchParams(window.location.search);
        const proyectoId = params.get('id');
        montarProyecto(app, proyectoId);
    } else {
        // index.html o raíz
        montarInicio(app);
    }
});