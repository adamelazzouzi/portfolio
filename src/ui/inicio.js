// ============================================
// UI - PANTALLA DE INICIO DEL PORTFOLIO
// Home con 2 tarjetas grandes: Minijuegos y Prácticas de Webs
// ============================================

export function montarInicio(contenedor) {
    contenedor.innerHTML = `
        <header class="inicio-header">
            <h1 class="inicio-titulo">Adam El Azzouzi</h1>
            <p class="inicio-subtitulo">Desarrollador web</p>
        </header>

        <main class="inicio-secciones">
            <a href="minijuegos.html" class="seccion-card">
                <div class="seccion-icono">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="5" y="30" width="90" height="50" rx="25" stroke="currentColor" stroke-width="4"/>
                        <circle cx="30" cy="55" r="6" fill="currentColor"/>
                        <circle cx="70" cy="45" r="4" fill="currentColor"/>
                        <circle cx="80" cy="55" r="4" fill="currentColor"/>
                        <circle cx="70" cy="65" r="4" fill="currentColor"/>
                        <circle cx="60" cy="55" r="4" fill="currentColor"/>
                    </svg>
                </div>
                <h2 class="seccion-titulo">Minijuegos</h2>
                <p class="seccion-descripcion">Juegos interactivos para adivinar canciones de tus artistas favoritos.</p>
            </a>

            <a href="practicas.html" class="seccion-card">
                <div class="seccion-icono">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="4"/>
                        <ellipse cx="50" cy="50" rx="15" ry="40" stroke="currentColor" stroke-width="3"/>
                        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" stroke-width="3"/>
                        <path d="M 20 30 Q 50 40 80 30" stroke="currentColor" stroke-width="2" fill="none"/>
                        <path d="M 20 70 Q 50 60 80 70" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <h2 class="seccion-titulo">Prácticas de Webs</h2>
                <p class="seccion-descripcion">Webs para negocios ficticios. Diseño y desarrollo desde cero.</p>
            </a>
        </main>

        <footer class="inicio-footer">
            <p>Proyecto personal. Construido sin frameworks, sin dependencias.</p>
        </footer>
    `;
}