import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPersonList2Component } from './sales-person-list2.component';

describe('SalesPersonList2Component', () => {
  let component: SalesPersonList2Component;
  let fixture: ComponentFixture<SalesPersonList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesPersonList2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPersonList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
