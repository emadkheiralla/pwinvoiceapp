import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OaResponseComponent } from './oa-response.component';

describe('OaResponseComponent', () => {
  let component: OaResponseComponent;
  let fixture: ComponentFixture<OaResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OaResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OaResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
