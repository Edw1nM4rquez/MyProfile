import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangService } from 'src/app/core/services/lang.service';
import { FadeInDirective } from 'src/app/core/directives/fade-in.directive';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  contactInfo = {
    email: 'edwi1999@hotmail.com',
    location: 'Ecuador — Azogues',
    linkedin: 'https://linkedin.com/in/edwinfernandomarquez',
    github: 'https://github.com/Edw1nM4rquez',
  };

  constructor(public lang: LangService) {}
}
