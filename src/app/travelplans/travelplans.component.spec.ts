import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelplansComponent } from './travelplans.component';

describe('TravelplansComponent', () => {
  let component: TravelplansComponent;
  let fixture: ComponentFixture<TravelplansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelplansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
