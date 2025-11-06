import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {

  contactInfo = {
    email: 'edwi1999@hotmail.com',
    //phone: '+593 123 456 789',
    location: 'Ecuador - Azogues',
    linkedin: 'https://linkedin.com/in/edwinfernandomarquez',
    github: 'https://github.com/Edw1nM4rquez'
  };

  constructor() { }
}