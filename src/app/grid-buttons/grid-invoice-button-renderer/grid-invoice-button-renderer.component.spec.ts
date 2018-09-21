import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridInvoiceButtonRendererComponent } from './grid-invoice-button-renderer.component';

describe('GridInvoiceButtonRendererComponent', () => {
  let component: GridInvoiceButtonRendererComponent;
  let fixture: ComponentFixture<GridInvoiceButtonRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridInvoiceButtonRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridInvoiceButtonRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
