import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import Experience from 'src/app/core/interfaces/Experience';

@Component({
  selector: 'app-experience-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-preview.component.html',
  styleUrls: ['./experience-preview.component.scss']
})
export class ExperiencePreviewComponent {
  @Input() isPreview: boolean = false;
  
  public arrayExperience: Experience[] = [];

  get displayedExperience() {
    return this.isPreview ? this.arrayExperience.slice(0, 3) : this.arrayExperience;
  }

  constructor(private sanitizer: DomSanitizer) {
    this.arrayExperience = [
      {
        title: 'Ecuador Direct Roses | Trebol Roses | Agro Alto - Desarrollador Full Stack',
        description:
          'Desarrollé una plataforma integral para la gestión de tareas, comunicación interna y control de inventario y contabilidad. Apliqué Angular para construir una experiencia de usuario moderna y eficiente. Implementé serialización y análisis de datos para reportes dinámicos en Power BI.',
        date: 'abr.2024 - actualidad',
        urlDomain: '',
      },
      {
        title: 'Orion Governance - Desarrollador Frontend | USA',
        description:
          'Desarrollé componentes y vistas dinámicas con React, priorizando la experiencia de usuario y el rendimiento del sistema. Implementé herramientas y procesos de testeo automatizado para validar la interfaz de usuario y la lógica de interacción.',
        date: 'oct.2023 - oct.2024',
        urlDomain: 'https://oriongovernance.com',
      },
      {
        title: 'Universidad Politécnica Salesiana - Proyecto EduTech | Desarrollador Full Stack',
        description:
          'Desarrollé y mantuve el Repositorio de Objetos de Aprendizaje y una herramienta de adaptación basada en accesibilidad web. Utilicé Angular para el frontend y Django Rest Framework para el backend, implementando funcionalidades de IA y sistemas de recomendación.',
        date: 'abr.2022 - ene.2024',
        urlDomain: 'https://simulab.edutech-project.org/',
      },
      {
        title: 'Quikly Group - Desarrollador Frontend | Reino Unido',
        description:
          'Implementé y mantuve aplicaciones web y móviles desarrolladas con Angular e Ionic, aplicando buenas prácticas de arquitectura y rendimiento. Participé en el despliegue de aplicaciones y en la resolución de incidencias en producción.',
        date: 'mar.2023 - julio.2023',
        urlDomain: 'https://quikly.app',
      },
      {
        title: 'Optimus - Desarrollador Frontend | Ecuador',
        description:
          'Implementé una aplicación web de facturación electrónica con Angular, estructurada bajo el patrón Modelo–Vista–Controlador (MVC). Desarrollé módulos y componentes dinámicos para la gestión de usuarios, clientes y comprobantes.',
        date: 'feb.2022 - dic.2022',
        urlDomain: '',
      },
      {
        title: 'Universidad del Azuay - Desarrollador Unity | Ecuador',
        description:
          'Desarrollé simuladores laborales utilizando el motor Unity, implementando la lógica del juego y las interacciones en C#. Creé modelos y escenarios 3D con Blender y SketchUp, optimizados para rendimiento y realismo.',
        date: 'abr.2022 - jun.2022',
        urlDomain: '',
      },
      {
        title: 'Universidad Politécnica Salesiana - EMOV EP | Diseño y modelado de videojuegos',
        description:
          'Diseñé y modelé personajes y escenarios 3D con Blender, aplicando técnicas de optimización para tiempo real. Implementé scripts en C# para animaciones, físicas y mecánicas del juego. Gestioné equipos de trabajo y creé sectores urbanos.',
        date: 'mar.2020 - sep.2020',
        urlDomain: 'https://gihp4c.blog.ups.edu.ec/educacion-vial-de-peatones-y-conductores-de-la-ciudad-de-cuenca-a-traves-de-sistemas-de-realidad-virtual',
      }
    ];
  }

  sanitizerUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  openExperience(url: string) {
    window.open(url, '_blank');
  }
}