import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import * as THREE from 'three';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
   // this.init();
  }
  title = 'profile';

}
