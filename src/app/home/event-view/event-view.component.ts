import { Component, OnInit} from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { DataService } from '../data.service';
import 'rxjs/add/operator/map';
import {timeout} from 'q';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})

export class EventViewComponent implements OnInit {

  currDay: string;

  columnDefs = [
    {
      headerName: 'Work Order #',
      field: 'title',
      width: 400,
      suppressSizeToFit: true,
      cellRenderer: (wo) =>
        `<a href="#" >${wo.value}</a>`
    },
    {
      headerName: 'Action Item',
      field: 'action',
      width: 1050,
      suppressSizeToFit: true,
      cellRenderer: (ai) =>
        `<a href="#" >${ai.value}</a>`
    }
  ];


  rowData = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.currentDate.subscribe(currDay => this.currDay = currDay);
    this.dataService.currentGridData.subscribe( rowData => this.rowData = rowData);
  }
}
