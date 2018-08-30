import { Component, OnInit, AfterViewInit } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { DataService } from '../data.service';
import {CalendarEvent, CalendarEventAction} from 'angular-calendar';
import {Subject} from 'rxjs/index';

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

export class EventViewComponent implements OnInit, AfterViewInit {
  currDay: string;

  columnDefs = [
    {
      headerName: 'Work Order #',
      field: 'title',
      width: 541
    },
    {
      headerName: 'Action Item',
      field: 'start',
      width: 541
    }
  ];

  rowData = [];
  constructor(private dataService: DataService) {
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    this.dataService.currentDate.subscribe(currDay => this.currDay = currDay);
    this.dataService.currentGridData.subscribe( rowData => this.rowData = rowData);
  }
}
