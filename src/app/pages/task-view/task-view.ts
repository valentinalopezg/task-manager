// ========================================
// task-view.ts → Es la página que se muestra cuando visitas /
// ========================================

// Importamos la herramienta para crear componentes
import { Component } from '@angular/core';

// Este decorador convierte la clase TaskView en un componente
@Component({
  // 'selector' es el nombre HTML de este componente
  // Aunque no lo uses directamente, Angular lo usa internamente
  selector: 'app-task-view',
  
  // 'templateUrl' es el archivo HTML que contiene la vista de este componente
  // (aquí irá el contenido que verá el usuario: títulos, botones, listas, etc.)
  templateUrl: './task-view.html',
  
  // 'styleUrls' son los estilos CSS específicos de este componente
  styleUrls: ['./task-view.scss']
})

// La clase del componente (por ahora vacía, pero aquí irá la lógica más adelante)
export class TaskView {}