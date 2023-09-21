import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesDescriptionComponent } from './technologies-description.component';

describe('TechnologiesDescriptionComponent', () => {
  let component: TechnologiesDescriptionComponent;
  let fixture: ComponentFixture<TechnologiesDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
