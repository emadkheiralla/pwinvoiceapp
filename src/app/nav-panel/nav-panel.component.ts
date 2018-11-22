import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoginService } from '../login-page/login.service';
import { SidebarService } from '../header/sidebar.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.css']
})
export class NavPanelComponent implements OnInit{

  loggedIn: boolean;

  sidebarOpen: boolean;


  constructor(private loginService: LoginService, private sidebarService: SidebarService) { }

  ngOnInit() {
    this.loginService.logIn.subscribe(loggedIn => this.loggedIn = loggedIn);
    this.sidebarService.currentSidebar.subscribe(sidebar => this.sidebarOpen = sidebar);
  }

}
