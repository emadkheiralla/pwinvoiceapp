import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnBacksComponent } from './turn-backs.component';

describe('TurnBacksComponent', () => {
  let component: TurnBacksComponent;
  let fixture: ComponentFixture<TurnBacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnBacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnBacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
