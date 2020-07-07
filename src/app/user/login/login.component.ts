import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = this.userService.user;
  loginForm: FormGroup;
  check: string;

  constructor(public formBuilder: FormBuilder, public userService: UserService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
    });
  }

  onSubmit(): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.user.length; i++) {
      if (this.user[i].email === this.loginForm.get('email').value && this.user[i].password === this.loginForm.get('password').value) {
        this.user[i].status = true;
        this.check = 'true';
        this.userService.checkLogin = 'false';
        this.userService.userOnline = this.user[i];
        break;
      } else {
        this.check = 'false';
      }
    }
  }
}
