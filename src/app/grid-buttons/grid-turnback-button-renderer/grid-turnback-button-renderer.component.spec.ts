import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTurnbackButtonRendererComponent } from './grid-turnback-button-renderer.component';

describe('GridTurnbackButtonRendererComponent', () => {
  let component: GridTurnbackButtonRendererComponent;
  let fixture: ComponentFixture<GridTurnbackButtonRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTurnbackButtonRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTurnbackButtonRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
