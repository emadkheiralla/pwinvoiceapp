import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'pratt-whitney-invoice-app';

  ngAfterViewInit() {
    $(document).ready(function () {
      // $('#sidebar').mCustomScrollbar({
      //   theme: 'minimal'
      // });

      $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
      });
    });
  }
}
