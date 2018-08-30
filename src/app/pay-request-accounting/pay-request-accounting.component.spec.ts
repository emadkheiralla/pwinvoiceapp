import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRequestAccountingComponent } from './pay-request-accounting.component';

describe('PayRequestAccountingComponent', () => {
  let component: PayRequestAccountingComponent;
  let fixture: ComponentFixture<PayRequestAccountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayRequestAccountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRequestAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
