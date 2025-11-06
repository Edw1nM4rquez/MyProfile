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
        title: 'Simuladores laborales Universidad del Azuay',
        description:
          'Participé en el desarrollo de simuladores laborales para la Universidad del Azuay, enfocados en fortalecer competencias profesionales en entornos empresariales simulados.',
        date: '2020 - 2021',
        urlDomain: 'https://simulab.edutech-project.org/',
      },
      {
        title: 'Diseño, modelado, entorno de videojuegos | Universidad Politécnica Salesiana - EMOV EP',
        description:
          'Colaboré en el diseño y desarrollo de entornos de videojuegos educativos para el proyecto de educación vial en Cuenca utilizando sistemas de realidad virtual.',
        date: '2020 - 2021',
        urlDomain:
          'https://gihp4c.blog.ups.edu.ec/educacion-vial-de-peatones-y-conductores-de-la-ciudad-de-cuenca-a-traves-de-sistemas-de-realidad-virtual',
      },
      {
        title: 'Componentes Accessibles',
        description:
          'Propuse y desarrollé una serie de componentes accesibles utilizando PrimeNg y estándares ARIA, como parte del proyecto ATICA.',
        date: '2020 - 2021',
        urlDomain:
          'https://edutech-erasmus-project.github.io/accessible_frontend_database/#/',
      },
      {
        title: 'Quikly',
        description:
          'Formé parte del equipo de desarrollo del ecommerce Quikly, optimizando el código y modularizando la aplicación para mejorar su rendimiento y escalabilidad.',
        date: '2020 - 2021',
        urlDomain: 'https://quikly.app',
      },
      {
        title: 'Tarpuq | Universidad Politécnica Salesiana',
        description:
          'Desarrollé una aplicación móvil en Flutter para la gestión de información académica y administrativa de la Universidad Politécnica Salesiana.',
        date: '2019 - 2020',
        urlDomain: 'https://github.com/Edw1nM4rquez/Tarpuq-UPS',
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