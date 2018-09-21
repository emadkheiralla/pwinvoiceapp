import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAcceptRejectButtonRendererComponent } from './grid-accept-reject-button-renderer.component';

describe('GridAcceptRejectButtonRendererComponent', () => {
  let component: GridAcceptRejectButtonRendererComponent;
  let fixture: ComponentFixture<GridAcceptRejectButtonRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridAcceptRejectButtonRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridAcceptRejectButtonRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
