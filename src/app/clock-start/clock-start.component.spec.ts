import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockStartComponent } from './clock-start.component';

describe('ClockStartComponent', () => {
  let component: ClockStartComponent;
  let fixture: ComponentFixture<ClockStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
