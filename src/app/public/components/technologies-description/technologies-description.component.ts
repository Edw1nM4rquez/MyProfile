import { Component } from '@angular/core';
import { TegnologiesComponent } from '../technologies/tegnologies.component';

@Component({
  selector: 'app-technologies-description',
  templateUrl: './technologies-description.component.html',
  styleUrls: ['./technologies-description.component.scss'], 
  standalone:true,
  imports:[TegnologiesComponent]
})
export class TechnologiesDescriptionComponent {

}
