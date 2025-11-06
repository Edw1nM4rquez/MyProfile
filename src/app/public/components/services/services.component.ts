import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  
  services = [
    {
      icon: 'code',
      title: 'Desarrollo Frontend',
      description: 'Interfaces modernas y responsivas usando Angular, React y las últimas tecnologías web.',
      technologies: ['Angular', 'React', 'TypeScript', 'Tailwind CSS']
    },
    {
      icon: 'server',
      title: 'Desarrollo Backend',
      description: 'APIs robustas y escalables con Node.js, Python y bases de datos modernas.',
      technologies: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL']
    },
    {
      icon: 'mobile',
      title: 'Aplicaciones Móviles',
      description: 'Apps multiplataforma con tecnologías híbridas para iOS y Android.',
      technologies: ['Ionic', 'React Native', 'Flutter', 'Cordova']
    },
    {
      icon: 'globe',
      title: 'Desarrollo Web Completo',
      description: 'Soluciones web integrales desde el concepto hasta el despliegue.',
      technologies: ['Full Stack', 'DevOps', 'AWS', 'Docker']
    }
  ];

  constructor() { }
}