import { Component } from '@angular/core';
import {GridInvoiceButtonRendererComponent} from '../grid-buttons/grid-invoice-button-renderer/grid-invoice-button-renderer.component';
import {GridStatusButtonRendererComponent} from '../grid-buttons/grid-status-button-renderer/grid-status-button-renderer.component';
import {GridTurnbackButtonRendererComponent} from '../grid-buttons/grid-turnback-button-renderer/grid-turnback-button-renderer.component';

@Component({
  selector: 'app-turn-backs',
  templateUrl: './turn-backs.component.html',
  styleUrls: ['./turn-backs.component.css']
})
export class TurnBacksComponent {
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
        colId: 'params'
      },
      {
        headerName: 'View Status',
        field: 'row',
        cellRenderer: 'gridStatusButton',
        colId: 'params'
      },
      {
        headerName: 'Work Order Number',
        field: 'row'
      },
      {
        headerName: 'Due Date',
        field: 'date',
        editable: true,
        colId: 'square'
      },
      {
        headerName: 'Type',
        field: 'type',
        colId: 'cube'
      },
      {
        headerName: 'View Turnback',
        cellRenderer: 'gridViewTurnbackButton',
        colId: 'params'
      }

    ];
    this.rowData = createRowData();
    this.context = { componentParent: this };
    this.frameworkComponents = {
      gridInvoiceButton: GridInvoiceButtonRendererComponent,
      gridStatusButton: GridStatusButtonRendererComponent,
      gridViewTurnbackButton: GridTurnbackButtonRendererComponent
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
  for (let i = 0; i < 2; i++) {
    rowData.push({
      row: '18D-ATM10006-1(TT' + i + ')',
      date: new Date('December 17, 1995'),
      type: 'Main'
    });
  }
  return rowData;
}
