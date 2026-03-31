import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangService } from 'src/app/core/services/lang.service';
import { FadeInDirective } from 'src/app/core/directives/fade-in.directive';

@Component({
  selector: 'app-ai-section',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './ai-section.component.html',
  styleUrls: ['./ai-section.component.scss'],
})
export class AiSectionComponent {
  constructor(public lang: LangService) {}

  cards = [
    { cKey: 'c1', icon: 'brain', color: 'purple' },
    { cKey: 'c2', icon: 'bolt',  color: 'blue' },
    { cKey: 'c3', icon: 'star',  color: 'green' },
    { cKey: 'c4', icon: 'chart', color: 'orange' },
  ];

  iconPaths: Record<string, string> = {
    brain: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    bolt:  'M13 10V3L4 14h7v7l9-11h-7z',
    star:  'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
    chart: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  };

  colorClasses: Record<string, { icon: string; border: string; bg: string }> = {
    purple: { icon: 'text-purple-400', border: 'border-purple-500/25', bg: 'bg-purple-500/10' },
    blue:   { icon: 'text-blue-400',   border: 'border-blue-500/25',   bg: 'bg-blue-500/10' },
    green:  { icon: 'text-green-400',  border: 'border-green-500/25',  bg: 'bg-green-500/10' },
    orange: { icon: 'text-orange-400', border: 'border-orange-500/25', bg: 'bg-orange-500/10' },
  };
}
