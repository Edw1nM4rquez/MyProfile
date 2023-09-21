import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BannerComponent } from "../../components/banner/banner.component";
import { TegnologiesComponent } from "../../components/technologies/tegnologies.component";
import { IntroducctionComponent } from "../../components/introducction/introducction.component";
import { ProfileDescriptionComponent } from "../../components/profile-description/profile-description.component";
import { WorkGroupComponent } from "../../components/work-group/work-group.component";
import { TechnologiesDescriptionComponent } from "../../components/technologies-description/technologies-description.component";


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        BannerComponent,
        TegnologiesComponent,
        IntroducctionComponent,
        ProfileDescriptionComponent,
        WorkGroupComponent,
        TechnologiesDescriptionComponent
    ]
})
export class HomeModule { }
