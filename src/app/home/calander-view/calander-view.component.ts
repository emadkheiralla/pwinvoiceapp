import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent} from 'angular-calendar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import {DataService} from '../data.service';

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
  },
  green: {
    primary: '#4F9E52',
    secondary: '#58C07D'
  }
};

@Component({
  selector: 'app-calander-view',
  templateUrl: './calander-view.component.html',
  styleUrls: ['./calander-view.component.css']
})
export class CalanderViewComponent implements OnInit, AfterViewInit {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  currDay: string;

  view = 'month';

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: colors.green,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];
  rowData = [];

  refresh: Subject<any> = new Subject();

  activeDayIsOpen = true;

  // myObservable = Observable.create((observer: Observer<string>) => {
  //   observer.next(this.currDay);
  //   observer.complete();
  // });

  constructor(private modal: NgbModal, private dataService: DataService) { }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
    if (isSameDay(this.viewDate, new Date())) {
      this.currDay = 'Today';
    } else {
      this.currDay = this.viewDate.toDateString().substring(0, 15);
    }
    this.dataService.changeDay(this.currDay);
    // window.scroll(0,0 );

  }

  eventTimesChanged({
                      event,
                      newStart,
                      newEnd
                    }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    console.log(this.modalData);
  }

  handleClick(event: any): void {
    this.rowData = event.day.events;
    this.dataService.changeGridData(this.rowData);
  }




  // addEvent(): void {
  //   this.events.push({
  //     title: 'New event',
  //     start: startOfDay(new Date()),
  //     end: endOfDay(new Date()),
  //     color: colors.red,
  //     draggable: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     }
  //   });
  //   this.refresh.next();
  // }

  ngAfterViewInit() {
  }

  ngOnInit() {
    this.dataService.currentDate.subscribe(currDay => this.currDay = currDay);
    this.dataService.currentGridData.subscribe( rowData => this.rowData = rowData);
  }

}
