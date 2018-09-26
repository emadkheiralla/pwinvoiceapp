import { Component, OnInit } from '@angular/core';
import {GridInvoiceButtonRendererComponent} from '../grid-buttons/grid-invoice-button-renderer/grid-invoice-button-renderer.component';
import {GridStatusButtonRendererComponent} from '../grid-buttons/grid-status-button-renderer/grid-status-button-renderer.component';

@Component({
  selector: 'app-pay-request-accounting',
  templateUrl: './pay-request-accounting.component.html',
  styleUrls: ['./pay-request-accounting.component.css']
})
export class PayRequestAccountingComponent implements OnInit {
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
        width: 60
      },
      {
        headerName: 'View Status',
        field: 'row',
        cellRenderer: 'gridStatusButton',
        colId: 'params',
        width: 50
      },
      {
        headerName: 'Work Order Number',
        field: 'row',
        width: 80
      },
      {
        headerName: 'Due Date',
        field: 'date',
        editable: true,
        colId: 'square',
        width: 150
      },
      {
        headerName: 'Type',
        field: 'type',
        colId: 'cube',
        width: 100
      }
    ];
    this.rowData = createRowData();
    this.context = { componentParent: this };
    this.frameworkComponents = {
      gridInvoiceButton: GridInvoiceButtonRendererComponent,
      gridStatusButton: GridStatusButtonRendererComponent
    };
  }

  ngOnInit() {
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
  for (let i = 0; i < 2; i++) {
    rowData.push({
      row: '18D-ATM10006-1(TT' + i + ')',
      date: new Date('December 17, 1995'),
      type: 'Main'
    });
  }
  return rowData;

}
