// ========================================
// app.ts → Es el contenedor principal con un "hueco" (<router-outlet>)
// ========================================

// Importamos la herramienta para crear componentes de Angular
import { Component } from '@angular/core';

// Importamos RouterOutlet, que es lo que permite usar <router-outlet> en el HTML
import { RouterOutlet } from '@angular/router';

// Este decorador (@Component) convierte la clase App en un componente de Angular
@Component({
  // 'selector' es el nombre HTML que usaremos para insertar este componente
  // Si en algún lugar pones <app-root></app-root>, se mostrará este componente
  selector: 'app-root',
  
  // 'standalone: true' significa que este componente NO necesita un módulo 
  // (es la forma moderna de Angular, más simple)
  standalone: true,
  
  // 'imports' son las cosas que este componente necesita usar
  // Como usamos <router-outlet> en el HTML, debemos importar RouterOutlet aquí
  imports: [RouterOutlet],
  
  // 'templateUrl' indica dónde está el archivo HTML de este componente
  templateUrl: './app.html',
  
  // 'styleUrls' indica dónde están los estilos CSS de este componente
  styleUrls: ['./app.css']
})

// Esta es la clase del componente (por ahora está vacía, solo define el componente)
export class App {}