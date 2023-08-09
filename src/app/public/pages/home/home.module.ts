import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BannerComponent } from "../../components/banner/banner.component";
import { TegnologiesComponent } from "../../components/tegnologies/tegnologies.component";


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        BannerComponent,
        TegnologiesComponent
    ]
})
export class HomeModule { }
