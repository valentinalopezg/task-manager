// ========================================
// app.routes.ts → Define qué página mostrar según cada URL
// ========================================

// Importamos 'Routes', que es el tipo de dato para definir rutas
import { Routes } from '@angular/router';

// Importamos el componente TaskView que queremos mostrar
import { TaskView } from './pages/task-view/task-view';

// Aquí definimos las REGLAS de navegación:
// "Cuando el usuario visite cierta URL, muestra cierto componente"
export const routes: Routes = [
  // Esta regla dice:
  // - path: '' → Cuando la URL esté vacía (ejemplo: http://localhost:4200/)
  // - component: TaskView → Muestra el componente TaskView
  { path: '', component: TaskView }
  
  // Si tuvieras más páginas, agregarías más reglas aquí:
  // { path: 'contacto', component: ContactView },
  // { path: 'productos', component: ProductsView }
];