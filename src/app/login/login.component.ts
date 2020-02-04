import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  ngOnInit() {
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a valid email' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a valid Password' :
      this.password.hasError('password') ? 'Not a valid Password' : '';
  }
}
