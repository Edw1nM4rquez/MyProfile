import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-showcase.component.html',
  styleUrls: ['./portfolio-showcase.component.scss']
})
export class PortfolioShowcaseComponent {
  
  projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web Application',
      description: 'Plataforma completa de comercio electrónico con panel de administración y pasarela de pagos.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Mobile App',
      description: 'Aplicación móvil para gestión de tareas con sincronización en tiempo real.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      featured: false
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      category: 'Data Visualization',
      description: 'Dashboard interactivo para análisis de datos con gráficos en tiempo real.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      featured: true
    },
    {
      id: 4,
      title: 'Restaurant POS System',
      category: 'Point of Sale',
      description: 'Sistema de punto de venta completo para restaurantes con gestión de inventario.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      featured: false
    }
  ];

  constructor() { }

  trackByProject(index: number, project: any): number {
    return project.id;
  }
}