import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-turnback-button-renderer',
  template: `<span><button style="height: 20px" (click)="invokeParentMethod()" class="btn btn-info">View Turnback</button></span>`,
  styleUrls: ['./grid-turnback-button-renderer.component.css']
})
export class GridTurnbackButtonRendererComponent implements OnInit {
  public params: any;

  constructor() { }

  ngOnInit() {}

  agInit(params: any): void {
    this.params = params;
  }

  public invokeParentMethod() {
    this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`);
  }

  refresh(): boolean {
    return false;
  }

}
