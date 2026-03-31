import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangService } from 'src/app/core/services/lang.service';
import { FadeInDirective } from 'src/app/core/directives/fade-in.directive';

@Component({
  selector: 'app-profile-description',
  templateUrl: './profile-description.component.html',
  styleUrls: ['./profile-description.component.scss'],
  standalone: true,
  imports: [CommonModule, FadeInDirective],
})
export class ProfileDescriptionComponent {
  constructor(public lang: LangService) {}

  traits = ['t1', 't2', 't3'];

  traitIcons: Record<string, string> = {
    t1: 'M5 12h14M12 5l7 7-7 7',
    t2: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    t3: 'M13 10V3L4 14h7v7l9-11h-7z',
  };

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '/assets/CV-Edwin-Marquez.pdf';
    link.download = 'CV-Edwin-Marquez.pdf';
    link.click();
  }
}

