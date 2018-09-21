import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-status-button-renderer',
  template: `<span><button style="height:20px;padding-top: 1px;padding-bottom: 0;" (click)="invokeParentMethod()" class="btn btn-info">
    <span class="fa fa-list"></span></button></span>`,
  styleUrls: ['./grid-status-button-renderer.component.css']
})
export class GridStatusButtonRendererComponent implements OnInit {

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
