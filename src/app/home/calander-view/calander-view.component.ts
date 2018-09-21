import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CalendarEvent } from 'angular-calendar';
import {
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  format
} from 'date-fns';
import { Observable } from 'rxjs';
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


interface Film {
  id: number;
  title: string;
  release_date: string;
}

const timezoneOffset = new Date().getTimezoneOffset();
const hoursOffset = String(Math.floor(Math.abs(timezoneOffset / 60))).padStart(
  2,
  '0'
);
const minutesOffset = String(Math.abs(timezoneOffset % 60)).padEnd(2, '0');
const direction = timezoneOffset > 0 ? '-' : '+';
const timezoneOffsetString = `T00:00:00${direction}${hoursOffset}${minutesOffset}`;

@Component({
  selector: 'app-calander-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calander-view.component.html'
})
export class CalanderViewComponent implements OnInit {

  view = 'month';

  viewDate: Date = new Date();

  events$: Observable<Array<CalendarEvent<{ film: Film }>>>;

  activeDayIsOpen = false;

  currDay: string;

  rowData = [];

  constructor(private http: HttpClient, private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchEvents();
    this.dataService.currentDate.subscribe(currDay => this.currDay = currDay);
    this.dataService.currentGridData.subscribe( rowData => this.rowData = rowData);
  }

  fetchEvents(): void {
    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    }[this.view];

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    }[this.view];

    const params = new HttpParams()
      .set(
        'primary_release_date.gte',
        format(getStart(this.viewDate), 'YYYY-MM-DD')
      )
      .set(
        'primary_release_date.lte',
        format(getEnd(this.viewDate), 'YYYY-MM-DD')
      )
      .set('api_key', '0ec33936a68018857d727958dca1424f');

    this.events$ = this.http
      .get('https://api.themoviedb.org/3/discover/movie', { params })
      .pipe(
        map(({ results }: { results: Film[] }) => {
          console.log(results);
          return results.map((film: Film) => {
            return {
              title: film.title,
              start: new Date(film.release_date + timezoneOffsetString),
              id: film.id,
              color: colors.blue,
              meta: {
                film
              }
            };
          });
        })
      );
  }

  handleClick(event: any): void {
    this.rowData = event.day.events;
    this.dataService.changeGridData(this.rowData);
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    // if (isSameMonth(date, this.viewDate)) {
    //   if (
    //     (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
    //     events.length === 0
    //   ) {
    //     this.activeDayIsOpen = false;
    //   } else {
    //     this.activeDayIsOpen = true;
    //     this.viewDate = date;
    //   }
    // }
    this.viewDate = date;
    if (isSameDay(this.viewDate, new Date())) {
      this.currDay = 'Today';
    } else {
      this.currDay = this.viewDate.toDateString().substring(0, 15);
    }
    this.dataService.changeDay(this.currDay);
  }

  eventClicked(event: CalendarEvent<{ film: Film }>): void {
    window.open(
      `https://www.themoviedb.org/movie/${event.meta.film.id}`,
      '_blank'
    );
  }
}
