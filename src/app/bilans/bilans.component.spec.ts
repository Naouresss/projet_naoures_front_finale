import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilansComponent } from './bilans.component';

describe('BilansComponent', () => {
  let component: BilansComponent;
  let fixture: ComponentFixture<BilansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BilansComponent]
    });
    fixture = TestBed.createComponent(BilansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
