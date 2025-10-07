// ========================================
// main.ts → Enciende o inicia la aplicación
// ========================================

// Importamos la función que arranca una aplicación Angular
import { bootstrapApplication } from '@angular/platform-browser';

// Importamos nuestro componente principal (App)
import { App } from './app/app';

// Importamos la función que configura el sistema de rutas
import { provideRouter } from '@angular/router';

// Importamos las rutas que definimos anteriormente
import { routes } from './app/app.routes';

// Esta línea INICIA la aplicación:
// 1. Arranca el componente 'App' (que tiene el <router-outlet>)
// 2. Le dice a Angular: "Usa estas rutas (routes) para la navegación"
bootstrapApplication(App, {
  providers: [provideRouter(routes)]
  // 'providers' son servicios o configuraciones que Angular necesita
  // En este caso, le damos el sistema de rutas
});
