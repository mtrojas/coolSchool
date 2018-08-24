import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string  = ''
  password: string = ''
  auth  = {
    username: '',
    password: ''
  }
  user: any
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }



  handleLogin() {
    this.authService.loginService(this.auth)
    .subscribe(user => {
      this.user = user
      console.log(user)
      localStorage.setItem('user', JSON.stringify(user))
      window.location.reload()
      this.router.navigate(['']);
    })
    this.username = ''
    this.password = ''
  }

  ngOnInit() {

  }

}
