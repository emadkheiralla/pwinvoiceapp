import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp} from 'ag-grid-angular';


@Component({
  selector: 'app-grid-invoice-button-renderer',
  template: `<span><button style="height: 20px" (click)="invokeParentMethod()" class="btn btn-info">View Invoice</button></span>`,
  styleUrls: ['./grid-invoice-button-renderer.component.css']
})
export class GridInvoiceButtonRendererComponent implements OnInit, ICellRendererAngularComp {

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
