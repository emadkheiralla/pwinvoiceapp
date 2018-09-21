import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOaButtonRendererComponent } from './grid-oa-button-renderer.component';

describe('GridOaButtonRendererComponent', () => {
  let component: GridOaButtonRendererComponent;
  let fixture: ComponentFixture<GridOaButtonRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridOaButtonRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridOaButtonRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
