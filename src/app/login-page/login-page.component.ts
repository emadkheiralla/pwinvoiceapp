import { Component, OnInit, Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { TokenStorageService } from '../login-page/auth/token-storage.service';
import { AuthLoginInfo } from '../login-page/auth/login-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})



@Injectable()
export class LoginPageComponent implements OnInit {

  form = {
    username: 'M107042',
    password: 'ChangeMe%3F'
  };

  info = {
    token: this.tokenStorage.getToken(),
    username: this.tokenStorage.getUsername()
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  // tslint:disable-next-line:max-line-length
  constructor(private loginService: LoginService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {}

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }

  onSubmit() {

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.loginService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data['TOKEN_KEY']);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.loginService.changeLogin(this.isLoggedIn);
        document.getElementById('content').style.width = '87%';
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

}
