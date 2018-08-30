import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusGridComponent } from './status-grid.component';

describe('StatusGridComponent', () => {
  let component: StatusGridComponent;
  let fixture: ComponentFixture<StatusGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
