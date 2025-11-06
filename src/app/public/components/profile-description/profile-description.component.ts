import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-description',
  templateUrl: './profile-description.component.html',
  styleUrls: ['./profile-description.component.scss'], 
  standalone: true
})
export class ProfileDescriptionComponent {

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '/assets/CV-Edwin-Marquez.pdf';
    link.download = 'CV-Edwin-Marquez.pdf';
    link.click();
  }

}
