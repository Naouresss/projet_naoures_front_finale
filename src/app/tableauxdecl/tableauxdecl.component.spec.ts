import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauxdeclComponent } from './tableauxdecl.component';

describe('TableauxdeclComponent', () => {
  let component: TableauxdeclComponent;
  let fixture: ComponentFixture<TableauxdeclComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableauxdeclComponent]
    });
    fixture = TestBed.createComponent(TableauxdeclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
