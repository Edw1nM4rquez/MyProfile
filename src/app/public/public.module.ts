import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { RouterModule } from '@angular/router';
import { MenuPublicComponent } from "../shared/menu-public/menu-public.component";
import { FooterComponent } from "../shared/footer/footer.component";
@NgModule({
    declarations: [
        PublicComponent,
    ],
    imports: [
        CommonModule,
        PublicRoutingModule,
        RouterModule,
        MenuPublicComponent,
        FooterComponent
    ]
})
export class PublicModule { }
