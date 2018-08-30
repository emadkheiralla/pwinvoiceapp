import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OaFleetComponent } from './oa-fleet.component';

describe('OaFleetComponent', () => {
  let component: OaFleetComponent;
  let fixture: ComponentFixture<OaFleetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OaFleetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OaFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
