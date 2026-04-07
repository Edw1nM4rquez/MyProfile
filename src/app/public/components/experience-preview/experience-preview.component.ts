import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import Experience from 'src/app/core/interfaces/Experience';
import { LangService } from 'src/app/core/services/lang.service';

@Component({
  selector: 'app-experience-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-preview.component.html',
  styleUrls: ['./experience-preview.component.scss']
})
export class ExperiencePreviewComponent {
  @Input() isPreview: boolean = false;

  public activeIframeExperience: Experience | null = null;
  public iframeLoading: boolean = false;

  private readonly experienceEs: Experience[] = [
    {
      title: 'Tifozzi Ecuador - Desarrollador Web',
      description: 'Desarrollé el sitio web oficial de Tifozzi, cadena de restaurantes de cocina italo-argentina con más de 5 sucursales en Azogues, Cuenca y Cañar, fundada en 2013. Implementé catálogo de menú interactivo, sistema de reservaciones, carta digital en PDF, selector de sucursales y diseño responsivo acorde a la identidad de la marca.',
      date: 'mar.2026', urlDomain: 'https://www.tifozziecuador.com/',
    },
    {
      title: 'Ecuador Direct Roses | Trebol Roses | Agro Alto - Desarrollador Full Stack',
      description: 'Desarrollé una plataforma integral para la gestión de tareas, comunicación interna y control de inventario y contabilidad. Apliqué Angular para construir una experiencia de usuario moderna y eficiente. Implementé serialización y análisis de datos para reportes dinámicos en Power BI.',
      date: 'abr.2024 - actualidad', urlDomain: '',
    },
    {
      title: 'Orion Governance - Desarrollador Frontend | USA',
      description: 'Desarrollé componentes y vistas dinámicas con React, priorizando la experiencia de usuario y el rendimiento del sistema. Implementé herramientas y procesos de testeo automatizado para validar la interfaz de usuario y la lógica de interacción.',
      date: 'oct.2023 - oct.2024', urlDomain: 'https://oriongovernance.com',
    },
    {
      title: 'Universidad Politécnica Salesiana - Proyecto EduTech | Desarrollador Full Stack',
      description: 'Desarrollé y mantuve el Repositorio de Objetos de Aprendizaje y una herramienta de adaptación basada en accesibilidad web. Utilicé Angular para el frontend y Django Rest Framework para el backend, implementando funcionalidades de IA y sistemas de recomendación.',
      date: 'abr.2022 - ene.2024', urlDomain: 'https://simulab.edutech-project.org/',
    },
    {
      title: 'Quikly Group - Desarrollador Frontend | Reino Unido',
      description: 'Implementé y mantuve aplicaciones web y móviles desarrolladas con Angular e Ionic, aplicando buenas prácticas de arquitectura y rendimiento. Participé en el despliegue de aplicaciones y en la resolución de incidencias en producción.',
      date: 'mar.2023 - jul.2023', urlDomain: 'https://quikly.app',
    },
    {
      title: 'Optimus - Desarrollador Frontend | Ecuador',
      description: 'Implementé una aplicación web de facturación electrónica con Angular, estructurada bajo el patrón Modelo–Vista–Controlador (MVC). Desarrollé módulos y componentes dinámicos para la gestión de usuarios, clientes y comprobantes.',
      date: 'feb.2022 - dic.2022', urlDomain: '',
    },
    {
      title: 'Universidad del Azuay - Desarrollador Unity | Ecuador',
      description: 'Desarrollé simuladores laborales utilizando el motor Unity, implementando la lógica del juego y las interacciones en C#. Creé modelos y escenarios 3D con Blender y SketchUp, optimizados para rendimiento y realismo.',
      date: 'abr.2022 - jun.2022', urlDomain: '',
    },
    {
      title: 'Universidad Politécnica Salesiana - EMOV EP | Diseño y modelado de videojuegos',
      description: 'Diseñé y modelé personajes y escenarios 3D con Blender, aplicando técnicas de optimización para tiempo real. Implementé scripts en C# para animaciones, físicas y mecánicas del juego. Gestioné equipos de trabajo y creé sectores urbanos.',
      date: 'mar.2020 - sep.2020', urlDomain: 'https://gihp4c.blog.ups.edu.ec/educacion-vial-de-peatones-y-conductores-de-la-ciudad-de-cuenca-a-traves-de-sistemas-de-realidad-virtual',
    },
  ];

  private readonly experienceEn: Experience[] = [
    {
      title: 'Tifozzi Ecuador - Web Developer',
      description: 'Developed the official website for Tifozzi, an italo-argentinian restaurant chain with 5+ locations in Azogues, Cuenca and Cañar, founded in 2013. Implemented an interactive menu catalog, reservation system, digital PDF menu, branch selector and responsive design aligned with brand identity.',
      date: 'Mar.2026', urlDomain: 'https://www.tifozziecuador.com/',
    },
    {
      title: 'Ecuador Direct Roses | Trebol Roses | Agro Alto - Full Stack Developer',
      description: 'Built a comprehensive platform for task management, internal communication, inventory and accounting control. Used Angular for a modern and efficient UX. Implemented data serialization and analysis for dynamic Power BI reports.',
      date: 'Apr.2024 - present', urlDomain: '',
    },
    {
      title: 'Orion Governance - Frontend Developer | USA',
      description: 'Developed dynamic components and views with React, prioritizing user experience and system performance. Implemented automated testing tools and processes to validate UI and interaction logic.',
      date: 'Oct.2023 - Oct.2024', urlDomain: 'https://oriongovernance.com',
    },
    {
      title: 'Universidad Politécnica Salesiana - EduTech Project | Full Stack Developer',
      description: 'Developed and maintained the Learning Object Repository and a web accessibility-based adaptation tool. Used Angular for frontend and Django Rest Framework for backend, implementing AI and recommendation system features.',
      date: 'Apr.2022 - Jan.2024', urlDomain: 'https://simulab.edutech-project.org/',
    },
    {
      title: 'Quikly Group - Frontend Developer | United Kingdom',
      description: 'Implemented and maintained web and mobile applications built with Angular and Ionic, following best practices for architecture and performance. Participated in deployments and production incident resolution.',
      date: 'Mar.2023 - Jul.2023', urlDomain: 'https://quikly.app',
    },
    {
      title: 'Optimus - Frontend Developer | Ecuador',
      description: 'Implemented an electronic invoicing web application with Angular using an MVC pattern. Developed dynamic modules and components for user, client and invoice management.',
      date: 'Feb.2022 - Dec.2022', urlDomain: '',
    },
    {
      title: 'Universidad del Azuay - Unity Developer | Ecuador',
      description: 'Developed labor simulators using the Unity engine, implementing game logic and interactions in C#. Created 3D models and scenarios with Blender and SketchUp, optimized for performance and realism.',
      date: 'Apr.2022 - Jun.2022', urlDomain: '',
    },
    {
      title: 'Universidad Politécnica Salesiana - EMOV EP | Game Design & Modeling',
      description: 'Designed and modeled 3D characters and scenarios in Blender, applying real-time optimization techniques. Implemented C# scripts for animations, physics and game mechanics. Managed work teams and created urban environments.',
      date: 'Mar.2020 - Sep.2020', urlDomain: 'https://gihp4c.blog.ups.edu.ec/educacion-vial-de-peatones-y-conductores-de-la-ciudad-de-cuenca-a-traves-de-sistemas-de-realidad-virtual',
    },
  ];

  get arrayExperience(): Experience[] {
    return this.lang.lang === 'en' ? this.experienceEn : this.experienceEs;
  }

  get displayedExperience(): Experience[] {
    return this.isPreview ? this.arrayExperience.slice(0, 3) : this.arrayExperience;
  }

  constructor(private sanitizer: DomSanitizer, public lang: LangService) {}

  sanitizerUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  openIframePreview(experience: Experience) {
    this.activeIframeExperience = experience;
    this.iframeLoading = true;
    document.body.style.overflow = 'hidden';
  }

  closeIframePreview() {
    this.activeIframeExperience = null;
    this.iframeLoading = false;
    document.body.style.overflow = '';
  }

  onIframeLoad() {
    this.iframeLoading = false;
  }

  @HostListener('document:keydown.escape')
  onEscKey() {
    if (this.activeIframeExperience) {
      this.closeIframePreview();
    }
  }

  openExperience(url: string) {
    window.open(url, '_blank');
  }
}