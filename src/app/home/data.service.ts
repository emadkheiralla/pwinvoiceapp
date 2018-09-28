import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  constructor() {
  }

  rowData = [];

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
