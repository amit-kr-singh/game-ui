import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiService } from '../../services/api.service';
import  axios  from 'axios';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    public signinService: apiService,
    private formBuilder: FormBuilder,
    private fb: FormBuilder,
  ) { }

  // get f() { return this.loginForm.controls; }

  onSubmit() {
    console.log(this.loginForm)
    // this.signinService.Signin(this.loginForm.value.username, this.loginForm.value.password)
   
    var data = JSON.stringify({
      "email":     this.loginForm.value.username,
      "password": this.loginForm.value.password
    });

    var config = {
      method: 'post',
      url: 'http://192.34.59.79:8000/api/v1/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
}
