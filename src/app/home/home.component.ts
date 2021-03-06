import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { DataService } from './data.service';
import { CalendarEvent } from 'angular-calendar';
import { TokenStorageService } from '../login-page/auth/token-storage.service';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean;

  info: any;
  currDay: string;
  rowData = [];
  constructor(private dataService: DataService) {}


  ngOnInit() {
    this.dataService.currentDate.subscribe(currDay => this.currDay = currDay);
    this.dataService.currentGridData.subscribe( rowData => this.rowData = rowData);
  }

}
