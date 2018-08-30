import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-item-grid',
  templateUrl: './line-item-grid.component.html',
  styleUrls: ['./line-item-grid.component.css']
})
export class LineItemGridComponent implements OnInit {

  columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'},
    {headerName: 'License', field: 'license' },
    {headerName: 'Owner', field: 'owner' },
    {headerName: 'Type', field: 'type'}
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000, license: 'MB9621', owner: 'Emad Kheiralla', type: 'Sport' },
    { make: 'Ford', model: 'Mustang', price: 32000, license: 'GK8903', owner: 'Hector Polidero', type: 'Sport' },
    { make: 'Porsche', model: 'Boxter', price: 72000, license: 'RST981', owner: 'Omar Amin', type: 'Sport' },
    { make: 'Honda', model: 'Accord', price: 38000, license: 'AV90VT', owner: 'Toney Gerges', type: 'Sedan' },
    { make: 'BMW', model: '528IX', price: 26000, license: 'GH7T63', owner: 'Andres Chiluisa', type: 'Sport Sedan' },
    { make: 'GMC', model: 'Suburban', price: 18000, license: 'WXR369', owner: 'Jennifer Mann', type: 'SUV' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
