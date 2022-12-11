import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPublicComponent } from './menu-public/menu-public.component';


@NgModule({
  declarations: [
    MenuPublicComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MenuPublicComponent
  ]
})
export class SharedModule { }
