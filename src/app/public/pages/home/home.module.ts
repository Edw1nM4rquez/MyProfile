import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IntroducctionComponent } from '../../components/introducction/introducction.component';
import { ProfileDescriptionComponent } from '../../components/profile-description/profile-description.component';
import { ServicesComponent } from '../../components/services/services.component';
import { ExperiencePreviewComponent } from '../../components/experience-preview/experience-preview.component';
import { PortfolioShowcaseComponent } from '../../components/portfolio-showcase/portfolio-showcase.component';
import { CertificationComponent } from '../../pages/certification/certification.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    IntroducctionComponent,
    ProfileDescriptionComponent,
    ServicesComponent,
    ExperiencePreviewComponent,
    PortfolioShowcaseComponent,
    CertificationComponent,
    ContactSectionComponent,
  ],
})
export class HomeModule {}
