import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceReceiptReviewComponent } from './invoice-receipt-review.component';

describe('InvoiceReceiptReviewComponent', () => {
  let component: InvoiceReceiptReviewComponent;
  let fixture: ComponentFixture<InvoiceReceiptReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceReceiptReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceReceiptReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
