import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducctionComponent } from './introducction.component';

describe('IntroducctionComponent', () => {
  let component: IntroducctionComponent;
  let fixture: ComponentFixture<IntroducctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroducctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroducctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
