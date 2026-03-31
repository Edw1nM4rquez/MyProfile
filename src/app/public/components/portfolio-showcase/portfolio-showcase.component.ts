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
      stack: ['NestJS', 'TypeORM', 'PostgreSQL', 'REST API'],
      accent: 'blue',
      url: '',
    },
    {
      tKey: 'p2',
      stack: ['Angular', 'NestJS', 'PostgreSQL', 'Power BI'],
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
  ];

  accentClasses: Record<string, { border: string; badge: string; glow: string }> = {
    blue:   { border: 'border-blue-500/30 hover:border-blue-500/60',   badge: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',   glow: 'bg-blue-500/5' },
    purple: { border: 'border-purple-500/30 hover:border-purple-500/60', badge: 'bg-purple-500/10 text-purple-400 border border-purple-500/20', glow: 'bg-purple-500/5' },
    green:  { border: 'border-green-500/30 hover:border-green-500/60',  badge: 'bg-green-500/10 text-green-400 border border-green-500/20',  glow: 'bg-green-500/5' },
    orange: { border: 'border-orange-500/30 hover:border-orange-500/60', badge: 'bg-orange-500/10 text-orange-400 border border-orange-500/20', glow: 'bg-orange-500/5' },
  };

  constructor(public lang: LangService) {}

  openUrl(url: string): void {
    if (url) window.open(url, '_blank');
  }
}
