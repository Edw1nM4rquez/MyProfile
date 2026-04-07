import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LangService } from 'src/app/core/services/lang.service';

@Component({
  selector: 'app-menu-public',
  standalone: true,
  templateUrl: './menu-public.component.html',
  styleUrls: ['./menu-public.component.scss'],
  imports: [CommonModule],
})
export class MenuPublicComponent {
  menuOpen = false;

  navLinks = [
    { key: 'nav.home', href: '/', anchor: '' },
    { key: 'nav.projects', href: '/', anchor: 'projects' },
    { key: 'nav.experience', href: '/', anchor: 'work-section' },
    { key: 'nav.about', href: '/', anchor: 'about' },
    { key: 'nav.contact', href: '/', anchor: 'contact' },
  ];

  constructor(public lang: LangService) {}

  scrollTo(anchor: string): void {
    this.menuOpen = false;
    if (!anchor) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
