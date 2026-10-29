import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TraduccionesService {
    // Idioma actual ('es' por defecto)
    idioma = signal<'es' | 'en'>('es');

    private diccionario = {
        es: {
            bienvenido: 'Bienvenido a',
            quienesSomos: '¿Quiénes somos?',
            historia: `¡Hola! Somos ManualFoxStudio, un estudio indie proveniente de Martos, Jaén, España. 
      Nos centramos mucho en hacer videojuegos visualmente atractivos siguiendo el 
      patrón de estilo de videojuego principalmente de aventuras y de “tipo película” 
      (con escenas cinematograficas) con diálogos hechos por actores de doblaje y 
      también crear la sensación típica de las series`,
            eslogan: 'Siempre manuales, siempre astutos',
        },
        en: {
            bienvenido: 'Welcome to',
            quienesSomos: 'About us',
            historia: `Hello! We are ManualFoxStudio, an indie studio from Martos, Jaén, Spain. 
            We focus heavily on crafting visually striking video games, mainly following a 
            movie-like adventure style (featuring cinematic cutscenes) with dialogue performed 
            by voice actors, while also creating the classic feel of a TV series.`,
            eslogan: 'Always manual, always cunning',
        }
    };

    // Devuelve automáticamente los textos del idioma activo
    get t() {
        return this.diccionario[this.idioma()];
    }

    cambiarIdioma(nuevoIdioma: 'es' | 'en') {
        this.idioma.set(nuevoIdioma);
    }
}