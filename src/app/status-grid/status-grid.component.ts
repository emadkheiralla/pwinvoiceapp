import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-status-grid',
  templateUrl: './status-grid.component.html',
  styleUrls: ['./status-grid.component.css']
})
export class StatusGridComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  private defaultColDef;
  private defaultColGroupDef;
  private columnTypes;

  columnDefs = [
    {
      headerName: 'Work Order #',
      children: [
        {
          headerName: '',
          field: 'woNum'
        },
        {
          headerName: 'ESN',
          columnGroupShow: 'open',
          field: 'gold',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Operator Code',
          columnGroupShow: 'open',
          field: 'silver',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Engine Model',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Engine Type',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'FOD',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Removal Reason',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Customer Contract',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Eagledata Event ID',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Event Type',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        }
      ]
    },
    {
      headerName: 'Invoice Type',
      children: [
        {
          headerName: '',
          field: 'invoiceRR'
        },
        {
          headerName: 'Shop Code',
          columnGroupShow: 'open',
          field: 'gold',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Invoice Number',
          columnGroupShow: 'open',
          field: 'silver',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Invoice Amount',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'PO Number',
          columnGroupShow: 'open',
          field: 'gold',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Analyst',
          columnGroupShow: 'open',
          field: 'silver',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'General Notes',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        }
      ]
    },
    {
      headerName: 'Pre-Invoice',
      children: [
        {
          headerName: '',
          field: 'turnback'
        },
        {
          headerName: 'Induction Date',
          columnGroupShow: 'open',
          field: 'gold',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Engine Ship Date',
          columnGroupShow: 'open',
          field: 'silver',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Gate 1 Actual',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Est. Due Date',
          columnGroupShow: 'open',
          field: 'gold',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Customer Est. Amount',
          columnGroupShow: 'open',
          field: 'silver',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Date Sent to FM',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        }
      ]
    },
    {
      headerName: 'Review',
      children: [
        {
          headerName: '',
          field: 'clockstart'
        },
        {
          headerName: 'Invoice Received',
          columnGroupShow: 'open',
          field: 'gold',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Complete Package',
          columnGroupShow: 'open',
          field: 'silver',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Invoice Complete Sent',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Total',
          columnGroupShow: 'open',
          field: 'gold',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Due Date',
          columnGroupShow: 'open',
          field: 'silver',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'TB Sent',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'TB Returned',
          columnGroupShow: 'open',
          field: 'gold',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'TB Resent',
          columnGroupShow: 'open',
          field: 'silver',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Resolution',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Agreed Credit',
          columnGroupShow: 'open',
          field: 'gold',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Agreed Credit Received',
          columnGroupShow: 'open',
          field: 'silver',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'TB Affects EXW',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Supplemental Affects EXW',
          columnGroupShow: 'open',
          field: 'silver',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Notes',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        }
      ]
    },
    {
      headerName: 'Payment',
      children: [
        {
          headerName: '',
          field: 'paymentrequest'
        },
        {
          headerName: 'Clock Start',
          columnGroupShow: 'open',
          field: 'gold',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'CS Sent',
          columnGroupShow: 'open',
          field: 'silver',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Due Date',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Amount',
          columnGroupShow: 'open',
          field: 'gold',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Request for Signature',
          columnGroupShow: 'open',
          field: 'silver',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Payment Auth Sent',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Notes',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        }
      ]
    },
    {
      headerName: 'OA',
      children: [
        {
          headerName: '',
          field: 'oa'
        },
        {
          headerName: 'Target Due Date',
          columnGroupShow: 'open',
          field: 'gold',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Contract Due Date',
          columnGroupShow: 'open',
          field: 'silver',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Amount',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'EXW Sent',
          columnGroupShow: 'open',
          field: 'gold',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'FM Reply',
          columnGroupShow: 'open',
          field: 'silver',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Analyst Response',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Metrics Exclude Reason',
          columnGroupShow: 'open',
          field: 'gold',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Metrics Exclude Open',
          columnGroupShow: 'open',
          field: 'silver',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Metrics Exclude Closed',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Notes',
          columnGroupShow: 'open',
          field: 'gold',
          filter: 'agNumberColumnFilter'
        }
      ]
    },
    {
      headerName: 'Credit',
      children: [
        {
          headerName: '',
          field: 'oa'
        }
      ]
    },
    {
      headerName: 'Dispute',
      children: [
        {
          headerName: '',
          field: 'oa'
        },
        {
          headerName: '90 Days',
          columnGroupShow: 'open',
          field: 'gold',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Paid Short',
          columnGroupShow: 'open',
          field: 'silver',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Dispute Amount',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Dispute Open',
          columnGroupShow: 'open',
          field: 'gold',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Dispute Settled',
          columnGroupShow: 'open',
          field: 'silver',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Credit Amount',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Credit Received',
          columnGroupShow: 'open',
          field: 'gold',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Payment Amount',
          columnGroupShow: 'open',
          field: 'silver',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Request for Signature',
          columnGroupShow: 'open',
          field: 'bronze',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Payment Auth. Sent',
          columnGroupShow: 'open',
          field: 'gold',
          filter: 'agNumberColumnFilter'
        },
        {
          headerName: 'Notes',
          columnGroupShow: 'open',
          field: 'gold',
          filter: 'agNumberColumnFilter'
        }
      ]
    },
    {
      headerName: 'Misc',
      children: [
        {
          headerName: '',
          field: 'oa'
        },
        {
          headerName: 'Late Invoice Reason',
          field: 'oa',
          columnGroupShow: 'open'
        }
      ]
    }
  ];

  rowData = [
    {
      woNum: '18D-ATM10006-1(TT1)', invoiceRR: 'Aug 09, 2018', turnback: 'Aug 20, 2018', clockstart: 'Sep 01, 2018',
      paymentrequest: 'Oct 09, 2018', oa: 'Nov 20, 2018'
    },
    {
      woNum: '06E-ATM10005-2(TU2)', invoiceRR: 'Aug 13, 2018', turnback: 'Aug 24, 2018', clockstart: 'Sep 06, 2018',
      paymentrequest: 'Oct 16, 2018', oa: 'Nov 03, 2018'
    }
  ];


  ngOnInit() {

  }
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


  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }

}





