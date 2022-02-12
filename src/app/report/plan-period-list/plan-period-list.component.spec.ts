import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPeriodListComponent } from './plan-period-list.component';

describe('PlanPeriodListComponent', () => {
  let component: PlanPeriodListComponent;
  let fixture: ComponentFixture<PlanPeriodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanPeriodListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanPeriodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
