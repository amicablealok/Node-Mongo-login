import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "./register.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
      private  register : RegisterService
  ) { }

  user = new FormGroup({
    name : new FormControl('', [Validators.required]),
  email : new FormControl('', [Validators.required, Validators.email]),
  phoneNo : new FormControl('', [Validators.required, Validators.minLength(10) , Validators.maxLength(10)]),
  password : new FormControl('', [Validators.required]),
  });


  hide = true;



  ngOnInit() {}

  getEmailErrorMessage() {
    return this.user.get('email').hasError('required') ? 'You must enter a valid email' :
        this.user.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    return this.user.get('password').hasError('required') ? 'You must enter a valid Password' :
        this.user.get('password').hasError('password') ? 'Not a valid Password' : '';
  }
  getNameErrorMessage() {
    return this.user.get('name').hasError('required') ? 'You must enter a valid Name' :
        this.user.get('name').hasError('name') ? 'Not a valid Name' : '';
  }

  getPhoneNoErrorMessage() {
    return this.user.get('phoneNo').hasError('required') ? 'You must enter a valid Phone NO' :
        this.user.get('phoneNo').hasError('phoneNO') ? 'Not a valid Phone NO' : '';
  }

  registerUser() {
    // event.preventDefault();
   let data = this.user.value;
    let unused = this.register.registerUser(data);
  }
}
