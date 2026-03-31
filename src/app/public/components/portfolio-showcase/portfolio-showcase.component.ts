import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangService } from 'src/app/core/services/lang.service';
import { FadeInDirective } from 'src/app/core/directives/fade-in.directive';

@Component({
  selector: 'app-portfolio-showcase',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './portfolio-showcase.component.html',
  styleUrls: ['./portfolio-showcase.component.scss']
})
export class PortfolioShowcaseComponent {
  projects = [
    {
      tKey: 'p1',
      stack: ['Angular', 'NestJS', 'PostgreSQL', 'REST API'],
      accent: 'blue',
      url: '',
    },
    {
      tKey: 'p2',
      stack: ['Angular', 'Django', 'PostgreSQL', 'Power BI'],
      accent: 'purple',
      url: '',
    },
    {
      tKey: 'p3',
      stack: ['Angular', 'TypeScript', 'REST API', 'MVC'],
      accent: 'green',
      url: '',
    },
    {
      tKey: 'p4',
      stack: ['Angular', 'Django', 'Python', 'ML'],
      accent: 'orange',
      url: 'https://simulab.edutech-project.org/',
    },
    {
      tKey: 'p5',
      stack: ['Angular', 'NestJS', 'PostgreSQL', 'JWT'],
      accent: 'blue',
      url: '',
    },
  ];

  accentClasses: Record<string, { border: string; badge: string; glow: string }> = {
    blue:   { border: 'border-blue-200 hover:border-blue-400',   badge: 'bg-blue-50 text-blue-600 border border-blue-200',   glow: 'bg-blue-50' },
    purple: { border: 'border-purple-200 hover:border-purple-400', badge: 'bg-purple-50 text-purple-600 border border-purple-200', glow: 'bg-purple-50' },
    green:  { border: 'border-green-200 hover:border-green-400',  badge: 'bg-green-50 text-green-600 border border-green-200',  glow: 'bg-green-50' },
    orange: { border: 'border-orange-200 hover:border-orange-400', badge: 'bg-orange-50 text-orange-600 border border-orange-200', glow: 'bg-orange-50' },
  };

  constructor(public lang: LangService) {}

  openUrl(url: string): void {
    if (url) window.open(url, '_blank');
  }
}
