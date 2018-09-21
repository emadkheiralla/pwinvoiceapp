import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-status-grid',
  templateUrl: './status-grid.component.html',
  styleUrls: ['./status-grid.component.css']
})
export class StatusGridComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  columnDefs = [
    {
      headerName: 'Work Order #',
      children: [
        {
          headerName: '',
          field: 'woNum',
          width: 200
        },
        {
          headerName: 'Test1',
          columnGroupShow: 'open',
          field: 'gold',
          width: 100,
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Test2',
          columnGroupShow: 'open',
          field: 'silver',
          width: 100,
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Test3',
          columnGroupShow: 'open',
          field: 'bronze',
          width: 100,
          filter: 'agNumberColumnFilter'
        }
      ]
    },
    {
      headerName: 'Invoice Receipt Review',
      children: [
        {
          headerName: '',
          field: 'invoiceRR',
          width: 200
        },
        {
          headerName: 'Test1',
          columnGroupShow: 'open',
          field: 'gold',
          width: 100,
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Test2',
          columnGroupShow: 'open',
          field: 'silver',
          width: 100,
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Test3',
          columnGroupShow: 'open',
          field: 'bronze',
          width: 100,
          filter: 'agNumberColumnFilter'
        }
      ]
    },
    {
      headerName: 'Turnback',
      children: [
        {
          headerName: '',
          field: 'turnback',
          width: 200
        },
        {
          headerName: 'Test1',
          columnGroupShow: 'open',
          field: 'gold',
          width: 100,
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Test2',
          columnGroupShow: 'open',
          field: 'silver',
          width: 100,
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Test3',
          columnGroupShow: 'open',
          field: 'bronze',
          width: 100,
          filter: 'agNumberColumnFilter'
        }
      ]
    },
    {
      headerName: 'Clockstart',
      children: [
        {
          headerName: '',
          field: 'clockstart',
          width: 200
        },
        {
          headerName: 'Test1',
          columnGroupShow: 'open',
          field: 'gold',
          width: 100,
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Test2',
          columnGroupShow: 'open',
          field: 'silver',
          width: 100,
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Test3',
          columnGroupShow: 'open',
          field: 'bronze',
          width: 100,
          filter: 'agNumberColumnFilter'
        }
      ]
    },
    {
      headerName: 'Payment Request',
      children: [
        {
          headerName: '',
          field: 'paymentrequest',
          width: 100
        },
        {
          headerName: 'Test1',
          columnGroupShow: 'open',
          field: 'gold',
          width: 200,
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Test2',
          columnGroupShow: 'open',
          field: 'silver',
          width: 200,
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Test3',
          columnGroupShow: 'open',
          field: 'bronze',
          width: 200,
          filter: 'agNumberColumnFilter'
        }
      ]
    },
    {
      headerName: 'OA',
      children: [
        {
          headerName: '',
          field: 'oa',
          width: 200
        },
        {
          headerName: 'Test1',
          columnGroupShow: 'open',
          field: 'gold',
          width: 100,
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Test2',
          columnGroupShow: 'open',
          field: 'silver',
          width: 100,
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Test3',
          columnGroupShow: 'open',
          field: 'bronze',
          width: 100,
          filter: 'agNumberColumnFilter'
        }
      ]
    }
  ];

  rowData = [
    { woNum: '18D-ATM10006-1(TT1)', invoiceRR: 'Aug 09, 2018', turnback: 'Aug 20, 2018', clockstart: 'Sep 01, 2018',
      paymentrequest: 'Oct 09, 2018', oa: 'Nov 20, 2018' },
    { woNum: '06E-ATM10005-2(TU2)', invoiceRR: 'Aug 13, 2018', turnback: 'Aug 24, 2018', clockstart: 'Sep 06, 2018',
      paymentrequest: 'Oct 16, 2018', oa: 'Nov 03, 2018' },
    { woNum: '10F-ATM10004-1(TTA)', invoiceRR: 'Aug 03, 2018', turnback: 'Aug 14, 2018', clockstart: 'Sep 18, 2018',
      paymentrequest: 'Oct 29, 2018', oa: 'Nov 17, 2018' },
    { woNum: '05A-ATM10001-1(AG1)', invoiceRR: 'Aug 10, 2018', turnback: 'Aug 21, 2018', clockstart: 'Sep 25, 2018',
      paymentrequest: 'Oct 04, 2018', oa: 'Nov 24, 2018' },
    { woNum: '06D-ATM10003-2(UBU)', invoiceRR: 'Aug 05, 2018', turnback: 'Aug 16, 2018', clockstart: 'Sep 29, 2018',
      paymentrequest: 'Oct 18, 2018', oa: 'Nov 13, 2018' },
    { woNum: '11F-ATM10002-1(NTY)', invoiceRR: 'Aug 11, 2018', turnback: 'Aug 19, 2018', clockstart: 'Sep 16, 2018',
      paymentrequest: 'Oct 14, 2018', oa: 'Nov 18, 2018' },
    { woNum: '09D-ATM10007-2(AG1)', invoiceRR: 'Aug 02, 2018', turnback: 'Aug 08, 2018', clockstart: 'Sep 13, 2018',
      paymentrequest: 'Oct 05, 2018', oa: 'Nov 06, 2018' },
    { woNum: '17E-ATM10008-1(TTA)', invoiceRR: 'Aug 09, 2018', turnback: 'Aug 15, 2018', clockstart: 'Sep 04, 2018',
      paymentrequest: 'Oct 22, 2018', oa: 'Nov 22, 2018' },
    { woNum: '18E-ATM10009-2(UBU)', invoiceRR: 'Aug 12, 2018', turnback: 'Aug 19, 2018', clockstart: 'Sep 02, 2018',
      paymentrequest: 'Oct 02, 2018', oa: 'Nov 29, 2018' },
    { woNum: '16F-ATM10010-2(TT1)', invoiceRR: 'Aug 20, 2018', turnback: 'Aug 28, 2018', clockstart: 'Sep 08, 2018',
      paymentrequest: 'Oct 01, 2018', oa: 'Nov 19, 2018' },
    { woNum: '17A-ATM10011-1(TTA)', invoiceRR: 'Aug 16, 2018', turnback: 'Aug 24, 2018', clockstart: 'Sep 15, 2018',
      paymentrequest: 'Oct 06, 2018', oa: 'Nov 05, 2018' }
  ];

  constructor() {
  }
  // onGridReady(params) {
  //   this.gridApi = params.api;
  //   this.gridColumnApi = params.columnApi;
  //
  //   this.http
  //     .get('https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json')
  //     .subscribe(data => {
  //       this.rowData.push(data);
  //     });
  // }

  ngOnInit() {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }

}





