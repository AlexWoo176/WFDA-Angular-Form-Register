import {Component} from '@angular/core';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SDU-Team-Message-Group-Chat';

  constructor(public userService: UserService) {

  }

  logout(): void {
    this.userService.checkLogin = 'true';
    this.userService.checkUser(this.userService.userOnline.email).status = false;
  }
}
