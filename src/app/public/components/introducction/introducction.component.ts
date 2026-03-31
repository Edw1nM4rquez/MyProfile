import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangService } from 'src/app/core/services/lang.service';
import { FadeInDirective } from 'src/app/core/directives/fade-in.directive';

@Component({
  selector: 'app-introducction',
  templateUrl: './introducction.component.html',
  styleUrls: ['./introducction.component.scss'],
  standalone: true,
  imports: [CommonModule, FadeInDirective],
})
export class IntroducctionComponent {
  constructor(public lang: LangService) {}

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '/assets/CV-Edwin-Marquez.pdf';
    link.download = 'CV-Edwin-Marquez.pdf';
    link.click();
  }

  scrollTo(anchor: string): void {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}

