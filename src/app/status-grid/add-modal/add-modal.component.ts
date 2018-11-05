import { Component, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {map, startWith} from 'rxjs/operators';



@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  myControl = new FormControl();
  options: string[] = ['V15159', '770121'];
  filteredOptions: Observable<string[]>;

  closeResult = '';

    modalColumnDefs = [
    {
      headerName: 'ESN',
      field: 'esn',
    },
    {
      headerName: 'Induction Date',
      field: 'inductionDate',
    },
    {
      headerName: 'Removal Date',
      field: 'removalDate',
    },
    {
      headerName: 'Operator Code',
      field: 'operatorCode',
    },
    {
      headerName: 'Operator Name',
      field: 'operatorName',
    },
    {
      headerName: 'Ship Date',
      field: 'shipDate',
    },
    {
      headerName: 'Shop Code',
      field: 'shopCode',
    },
    {
      headerName: 'Shop Name',
      field: 'shopName',
    }
  ];

  modalRowData = [
    {
      esn: 'V15159', inductionDate: '8/2/2018', removalDate: '5/30/2018', operatorCode: 'WZZ', operatorName: 'Wizz Air',
      shipDate: '', shopCode: 'IN9', shopName: 'Inchinnan'
    },
    {
      esn: 'V15159', inductionDate: '7/7/2017', removalDate: '6/15/2017', operatorCode: 'WZZ', operatorName: 'Wizz Air',
      shipDate: '10/14/2017', shopCode: 'TE9', shopName: 'Turkish Engine Center'
    }
  ];

  open(content) {
    this.modalService.open(content, {size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
