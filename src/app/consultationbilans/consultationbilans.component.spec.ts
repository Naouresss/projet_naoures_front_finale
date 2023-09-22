import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationbilansComponent } from './consultationbilans.component';

describe('ConsultationbilansComponent', () => {
  let component: ConsultationbilansComponent;
  let fixture: ComponentFixture<ConsultationbilansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultationbilansComponent]
    });
    fixture = TestBed.createComponent(ConsultationbilansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
