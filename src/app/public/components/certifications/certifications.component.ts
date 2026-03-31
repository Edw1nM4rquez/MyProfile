import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangService } from 'src/app/core/services/lang.service';
import { FadeInDirective } from 'src/app/core/directives/fade-in.directive';

interface Cert {
  key: string;
  color: 'blue' | 'green' | 'purple';
  url: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent {
  constructor(public lang: LangService) {}

  certs: Cert[] = [
    { key: 'c1',  color: 'purple', url: '#' },
    { key: 'c2',  color: 'blue',   url: 'https://grow.google/certificates/' },
    { key: 'c3',  color: 'blue',   url: '#' },
    { key: 'c4',  color: 'purple', url: 'https://www.udemy.com/certificate/UC-2dcbd7e9-56b3-4792-ad42-f552c14d4fdd/' },
    { key: 'c5',  color: 'purple', url: 'https://www.udemy.com/certificate/UC-c0838d5a-f72c-4006-a291-2a6331e8bf72/' },
    { key: 'c6',  color: 'blue',   url: 'https://www.udemy.com/certificate/UC-0aad2eee-b8f1-4166-8dda-caf237e09d66/' },
    { key: 'c7',  color: 'purple', url: '#' },
    { key: 'c8',  color: 'green',  url: '#' },
    { key: 'c9',  color: 'green',  url: '#' },
    { key: 'c10', color: 'green',  url: '#' },
    { key: 'c11', color: 'purple', url: '#' },
    { key: 'c12', color: 'blue',   url: '#' },
    { key: 'c13', color: 'blue',   url: '#' },
    { key: 'c14', color: 'green',  url: 'https://www.udemy.com/certificate/UC-c339037d-c563-4f7b-9d63-cec559cedb28/' },
  ];

  colorClasses: Record<string, { border: string; badge: string; icon: string }> = {
    blue: {
      border: 'border-blue-200 hover:border-blue-400',
      badge: 'bg-blue-50 text-blue-600 border border-blue-200',
      icon: 'text-blue-600',
    },
    green: {
      border: 'border-green-200 hover:border-green-400',
      badge: 'bg-green-50 text-green-600 border border-green-200',
      icon: 'text-green-600',
    },
    purple: {
      border: 'border-purple-200 hover:border-purple-400',
      badge: 'bg-purple-50 text-purple-600 border border-purple-200',
      icon: 'text-purple-600',
    },
  };
}
