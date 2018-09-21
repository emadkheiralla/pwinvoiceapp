import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridStatusButtonRendererComponent } from './grid-status-button-renderer.component';

describe('GridStatusButtonRendererComponent', () => {
  let component: GridStatusButtonRendererComponent;
  let fixture: ComponentFixture<GridStatusButtonRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridStatusButtonRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridStatusButtonRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
