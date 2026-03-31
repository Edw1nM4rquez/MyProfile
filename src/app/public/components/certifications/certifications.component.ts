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
      border: 'border-blue-800/50 hover:border-blue-600/60',
      badge: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
      icon: 'text-blue-400',
    },
    green: {
      border: 'border-green-800/50 hover:border-green-600/60',
      badge: 'bg-green-500/10 text-green-400 border border-green-500/20',
      icon: 'text-green-400',
    },
    purple: {
      border: 'border-purple-800/50 hover:border-purple-600/60',
      badge: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
      icon: 'text-purple-400',
    },
  };
}
