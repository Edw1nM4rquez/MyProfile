import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
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

  constructor(
    public lang: LangService,
    private router: Router,
  ) {}

  /** Home route is `/` (no extra path before query or hash). */
  private isHome(): boolean {
    const path = this.router.url.split('?')[0].split('#')[0];
    return path === '/' || path === '';
  }

  /**
   * Section anchors only exist on the home page. From other routes we must navigate to `/` first.
   */
  scrollTo(anchor: string): void {
    this.menuOpen = false;

    if (!anchor) {
      if (this.isHome()) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        void this.router.navigate(['/']);
      }
      return;
    }

    if (this.isHome()) {
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    void this.router.navigate(['/']).then(() => {
      this.router.events
        .pipe(
          filter((e): e is NavigationEnd => e instanceof NavigationEnd),
          take(1),
        )
        .subscribe(() => {
          requestAnimationFrame(() => {
            document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
          });
        });
    });
  }
}
