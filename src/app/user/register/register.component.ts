import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// @ts-ignore
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  check: string;

  constructor(
    private formBuilder: FormBuilder, private userService: UserService
  ) {
  }

  // tslint:disable-next-line:typedef
  checkPasswords(group: FormGroup) {
    const pass = group.get('password').value;
    const confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? null : {notSame: true};
  }

  ngOnInit(): void {
    this.register = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      confirmPassword: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18), Validators.max(120)]],
      address: ['', Validators.required],
      image: ['', Validators.required]
    }, {validator: this.checkPasswords});
  }

  onSubmit(): void {
    if (this.register.valid && this.userService.checkEmailExists(this.register.get('email').value)) {
      this.check = 'true';
      this.userService.user.push(
        {
          name: this.register.get('name').value,
          email: this.register.get('email').value,
          password: this.register.get('password').value,
          age: this.register.get('age').value,
          address: this.register.get('address').value,
          image: this.register.get('image').value,
          status: false
        });
    } else {
      this.check = 'false';
    }
  }

}
