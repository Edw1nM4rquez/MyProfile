import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-public',
  standalone: true,
  templateUrl: './menu-public.component.html',
  styleUrls: ['./menu-public.component.scss'],
  imports: [CommonModule],
})
export class MenuPublicComponent implements OnInit {
  links: { title: string; url: string; svg: SafeHtml }[] = [];
  constructor(private sanitizer: DomSanitizer) {
    this.links = [
      {
        title: 'Inicio',
        url: '/',
        svg: this.sanitizer
          .bypassSecurityTrustHtml(` <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            </svg>`),
      },
      {
        title: 'Trabajos',
        url: '/experience',
        svg: this.sanitizer
          .bypassSecurityTrustHtml(` <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M16 3v4M8 3v4M3 10h18" />
            </svg>`),
      },
      {
        title: 'Certificaciones',
        url: '/certificates',
        svg: this.sanitizer
          .bypassSecurityTrustHtml(` <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="8" r="6" />
              <path d="M12 14v7M9 21h6" />
            </svg>`),
      },
      {
        title: 'Proyectos',
        url: '/projects',
        svg: this.sanitizer
          .bypassSecurityTrustHtml(` <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="8" r="6" />
            </svg>`),
      },
    ];
  }
  ngOnInit() {}
}
