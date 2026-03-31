import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangService } from 'src/app/core/services/lang.service';
import { FadeInDirective } from 'src/app/core/directives/fade-in.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  constructor(public lang: LangService) {}

  stackGroups = [
    {
      labelKey: 'stack.backend',
      accentClass: 'text-blue-600',
      borderClass: 'border-blue-200 hover:border-blue-300',
      dotClass: 'bg-blue-500',
      items: [
        { name: 'NestJS', level: 90 },
        { name: 'Node.js', level: 88 },
        { name: 'Django', level: 80 },
        { name: 'REST API / GraphQL', level: 92 },
        { name: 'TypeORM / Prisma', level: 82 },
        { name: 'Microservices', level: 70 },
      ],
    },
    {
      labelKey: 'stack.frontend',
      accentClass: 'text-purple-600',
      borderClass: 'border-purple-200 hover:border-purple-300',
      dotClass: 'bg-purple-500',
      items: [
        { name: 'Angular 15+', level: 95 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 93 },
        { name: 'TailwindCSS', level: 90 },
        { name: 'Ionic', level: 80 },
        { name: 'RxJS', level: 78 },
      ],
    },
    {
      labelKey: 'stack.ai',
      accentClass: 'text-green-600',
      borderClass: 'border-green-200 hover:border-green-300',
      dotClass: 'bg-green-500',
      items: [
        { name: 'OpenAI API', level: 78 },
        { name: 'Python / scikit-learn', level: 75 },
        { name: 'Automation / CRON', level: 82 },
        { name: 'Power BI / BI tools', level: 76 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MySQL', level: 85 },
      ],
    },
    {
      labelKey: 'stack.tools',
      accentClass: 'text-orange-600',
      borderClass: 'border-orange-200 hover:border-orange-300',
      dotClass: 'bg-orange-500',
      items: [
        { name: 'Git / GitHub', level: 93 },
        { name: 'Docker', level: 72 },
        { name: 'Vercel / Railway', level: 85 },
        { name: 'Linux / Bash', level: 78 },
        { name: 'C# / Unity', level: 75 },
        { name: 'Agile / Scrum', level: 80 },
      ],
    },
  ];
}
