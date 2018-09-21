import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDocsButtonRendererComponent } from './grid-docs-button-renderer.component';

describe('GridDocsButtonRendererComponent', () => {
  let component: GridDocsButtonRendererComponent;
  let fixture: ComponentFixture<GridDocsButtonRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridDocsButtonRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDocsButtonRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
