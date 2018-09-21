import { Component } from '@angular/core';
import {GridInvoiceButtonRendererComponent} from '../grid-buttons/grid-invoice-button-renderer/grid-invoice-button-renderer.component';
import {GridStatusButtonRendererComponent} from '../grid-buttons/grid-status-button-renderer/grid-status-button-renderer.component';
import {GridDocsButtonRendererComponent} from '../grid-buttons/grid-docs-button-renderer/grid-docs-button-renderer.component';
import {GridAcceptRejectButtonRendererComponent} from '../grid-buttons/grid-accept-reject-button-renderer/grid-accept-reject-button-renderer.component';

@Component({
  selector: 'app-invoice-receipt-review',
  templateUrl: './invoice-receipt-review.component.html',
  styleUrls: ['./invoice-receipt-review.component.css']
})
export class InvoiceReceiptReviewComponent {
  private gridApi;
  private gridColumnApi;
  rowData: any[];

  columnDefs;
  context;
  frameworkComponents;

  constructor() {
    this.columnDefs = [
      {
        headerName: 'View Invoice',
        field: 'row',
        cellRenderer: 'gridInvoiceButton',
        colId: 'params',
        width: 70
      },
      {
        headerName: 'View Status',
        field: 'row',
        cellRenderer: 'gridStatusButton',
        colId: 'params',
        width: 60
      },
      {
        headerName: 'Work Order Number',
        field: 'row',
        width: 100
      },
      {
        headerName: 'Due Date',
        field: 'date',
        editable: true,
        colId: 'square',
        width: 250
      },
      {
        headerName: 'Type',
        field: 'type',
        colId: 'cube',
        width: 50
      },
      {
        headerName: 'View Docs',
        cellRenderer: 'gridViewDocsButton',
        colId: 'params',
        width: 100
      },
      {
        headerName: 'Accept/Reject',
        field: 'value',
        cellRenderer: 'gridAcceptRejectButton',
        colId: 'params',
        width: 80
      }
    ];
    this.rowData = createRowData();
    this.context = { componentParent: this };
    this.frameworkComponents = {
      gridInvoiceButton: GridInvoiceButtonRendererComponent,
      gridStatusButton: GridStatusButtonRendererComponent,
      gridViewDocsButton: GridDocsButtonRendererComponent,
      gridAcceptRejectButton: GridAcceptRejectButtonRendererComponent
    };
  }

  refreshEvenRowsCurrencyData() {
    this.gridApi.forEachNode(rowNode => {
      if (rowNode.data.value % 2 === 0) {
        rowNode.setDataValue('currency', rowNode.data.value + Number(Math.random().toFixed(2)));
      }
    });
    this.gridApi.refreshCells({ columns: ['currency'] });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }

  methodFromParent(cell) {
    alert('Parent Component Method from ' + cell + '!');
  }
}

function createRowData() {
  const rowData = [];
  for (let i = 0; i < 4; i++) {
    rowData.push({
      row: '18D-ATM10006-1(TT' + i + ')',
      date: new Date('December 17, 1995'),
      type: 'Main'
    });
  }
  return rowData;
}
