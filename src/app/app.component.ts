import { Component, AfterViewInit, OnInit } from '@angular/core';
import { LoginService } from './login-page/login.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'pratt-whitney-invoice-app';
  loggedIn: boolean;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginService.logIn.subscribe(loggedIn => this.loggedIn = loggedIn);
    if (!this.loggedIn) {
      document.getElementById('content').style.width = '100%';
    }
  }

  ngAfterViewInit() {
    // $(document).ready(function () {
    //   // $('#sidebar').mCustomScrollbar({
    //   //   theme: 'minimal'
    //   // });

    //   $('#sidebarCollapse').collapse('toggle');
    // });
  }
}
