import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  constructor() {
  }

  rowData = [
    { 'title': '18D-ATM10006-1(TT1)', 'id': 'Needs Access Work'},
    { 'title': '06E-ATM10005-2(TU2)', 'id': 'Needs Review'},
    { 'title': '10F-ATM10004-1(TTA)', 'id': 'Needs Review'}];

  private dateSource = new BehaviorSubject<string>('Today');
  currentDate = this.dateSource.asObservable();

  private gridSource = new BehaviorSubject<Array<object>>(this.rowData);
  currentGridData = this.gridSource.asObservable();

  changeDay(newDate: string) {
    this.dateSource.next(newDate);
  }

  changeGridData(newGridData: Array<any>) {
    this.rowData = newGridData;
    this.gridSource.next(newGridData);
  }
}
