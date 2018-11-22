import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  sidebarOpen = true;

  private sidebarSource = new BehaviorSubject<boolean>(this.sidebarOpen);
  currentSidebar = this.sidebarSource.asObservable();

  constructor() { }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    this.sidebarSource.next(this.sidebarOpen);
  }
}
