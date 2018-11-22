import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoginService } from '../login-page/login.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../login-page/auth/token-storage.service';
import { SidebarService } from './sidebar.service';
import { GetuserService } from '../login-page/getuser.service';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean;

  acctType = [];

  navbarOpen = false;

  sidebarOpen: boolean;

  userData = {};

  firstName = '';
  lastName = '';


  logOut() {
    this.tokenStorage.signOut();
    this.loggedIn = false;
    this.loginService.changeLogin(this.loggedIn);
    this.router.navigate(['/loginpage']);
    document.getElementById('content').style.width = '100%';
  }

  // tslint:disable-next-line:max-line-length
  constructor(private userService: GetuserService, private loginService: LoginService, private tokenStorage: TokenStorageService, private router: Router, private sidebarService: SidebarService) { }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
    if (this.sidebarOpen === false) {
      document.getElementById('content').style.width = '100%';
    } else {
      document.getElementById('content').style.width = '87%';
    }
  }

  ngOnInit() {
    this.loginService.logIn.subscribe(loggedIn => this.loggedIn = loggedIn);
    this.sidebarService.currentSidebar.subscribe(sidebar => this.sidebarOpen = sidebar);
    this.userService.userData.subscribe(data => this.userData = data);

    this.userService.getUserData().subscribe(
      res => {
        this.firstName = this.userData['firstName'];
        this.lastName = this.userData['lastName'];
        this.acctType = this.userData['roles'];
      },
      error => {
        console.log(error);
      }
    );
  }
}
