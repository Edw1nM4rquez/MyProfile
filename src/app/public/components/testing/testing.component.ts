import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TestingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
