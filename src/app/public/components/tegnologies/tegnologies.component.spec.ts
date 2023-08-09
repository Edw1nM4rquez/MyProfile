import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TegnologiesComponent } from './tegnologies.component';

describe('TegnologiesComponent', () => {
  let component: TegnologiesComponent;
  let fixture: ComponentFixture<TegnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TegnologiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TegnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
