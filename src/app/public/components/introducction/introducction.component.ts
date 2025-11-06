import { Component } from '@angular/core';

@Component({
  selector: 'app-introducction',
  templateUrl: './introducction.component.html',
  styleUrls: ['./introducction.component.scss'],
  standalone: true,
})
export class IntroducctionComponent {
  
  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '/assets/CV-Edwin-Marquez.pdf';
    link.download = 'CV-Edwin-Marquez.pdf';
    link.click();
  }

  goToWorkSection(): void {
    const workSection = document.getElementById('work-section');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
