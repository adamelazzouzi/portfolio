// ============================================
// APP - Punto de entrada
// Router simple: detecta en qué página estamos y monta lo que toca
// ============================================

import { montarInicio } from './ui/inicio.js';
import { montarMinijuegos } from './ui/minijuegos.js';
import { montarPracticas } from './ui/practicas.js';
import { montarPracticasGenerales } from './ui/practicas-generales.js';
import { montarPracticasEstudios } from './ui/practicas-estudios.js';
import { montarProyecto } from './ui/proyecto.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const path = window.location.pathname.toLowerCase();

    if (path.includes('minijuegos')) {
        montarMinijuegos(app);
    } else if (path.includes('practicas-generales')) {
        montarPracticasGenerales(app);
    } else if (path.includes('practicas-estudios')) {
        montarPracticasEstudios(app);
    } else if (path.includes('practicas')) {
        montarPracticas(app);
    } else if (path.includes('proyecto')) {
        const params = new URLSearchParams(window.location.search);
        const proyectoId = params.get('id');
        montarProyecto(app, proyectoId);
    } else {
        montarInicio(app);
    }
});