
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {CalendarEvent} from 'angular-calendar';


@Injectable()
export class DataService {

  rowData = [
    { title: 'A 3 Day Event', start: 'Mon Aug 27 2018 00:00:00 GMT-0400 (Eastern Daylight Time)'},
    { title: 'An event with no end date', start: 'Tue Aug 28 2018 00:00:00 GMT-0400 (Eastern Daylight Time)'},
    { title: 'A long event that spans 2 months', start: 'Tue Aug 28 2018 23:59:59 GMT-0400 (Eastern Daylight Time)'},
    { title: 'A draggable and resizable event', start: 'Tue Aug 28 2018 02:00:00 GMT-0400 (Eastern Daylight Time)'}
];

  private dateSource = new BehaviorSubject<string>('Today');
  currentDate = this.dateSource.asObservable();

  private gridSource = new BehaviorSubject<Array<any>>(this.rowData);
  currentGridData = this.gridSource.asObservable();

  constructor() { }
  changeDay(newDate: string) {
    this.dateSource.next(newDate);
  }

  changeGridData(newGridData: Array<any>) {
    this.rowData = newGridData;
    this.gridSource.next(newGridData);
    console.log(this.rowData);
  }
}
