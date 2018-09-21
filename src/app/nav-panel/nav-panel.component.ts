import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.css']
})
export class NavPanelComponent implements OnInit{

  constructor() { }

  ngOnInit() {
    // $(document).ready(function () {
    //   $('#sidebar').mCustomScrollbar({
    //     theme: 'minimal'
    //   });
    //
    //   $('#sidebarCollapse').on('click', function () {
    //     $('#sidebar, #content').toggleClass('active');
    //     $('.collapse.in').toggleClass('in');
    //     $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    //   });
    // });
  }

}
