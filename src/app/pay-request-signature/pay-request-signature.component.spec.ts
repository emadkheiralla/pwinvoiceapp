import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRequestSignatureComponent } from './pay-request-signature.component';

describe('PayRequestSignatureComponent', () => {
  let component: PayRequestSignatureComponent;
  let fixture: ComponentFixture<PayRequestSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayRequestSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRequestSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
