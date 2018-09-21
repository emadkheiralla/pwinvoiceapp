import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-grid-accept-reject-button-renderer',
  template: `<span><button style="height: 20px" (click)="invokeParentMethod()" class="btn btn-primary">Accept/Reject</button></span>`,
  styleUrls: ['./grid-accept-reject-button-renderer.component.css']
})
export class GridAcceptRejectButtonRendererComponent implements OnInit, ICellRendererAngularComp {

  constructor() { }

  ngOnInit() {}

  public params: any;

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
