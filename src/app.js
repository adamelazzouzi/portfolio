// ============================================
// APP - Punto de entrada
// Detecta si estamos en el home o en un proyecto
// ============================================

import { montarInicio } from './ui/inicio.js';
import { montarProyecto } from './ui/proyecto.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const params = new URLSearchParams(window.location.search);
    const proyectoId = params.get('id');

    if (proyectoId) {
        // Estamos en proyecto.html?id=quevedle
        montarProyecto(app, proyectoId);
    } else {
        // Estamos en index.html
        montarInicio(app);
    }
});