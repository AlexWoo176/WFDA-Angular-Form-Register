import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {UserService} from '../../services/user.service';
import {User} from '../../interface/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user = this.userService.user;
  name = '';
  resultSearch: User[] = [];

  search(): void {
    this.resultSearch = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.user.length; i++) {
      if (this.user[i].name === this.name) {
        this.resultSearch.push(this.user[i]);
      }
    }
  }

  constructor(private userService: UserService) {
  }

}
