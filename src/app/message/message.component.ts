import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  message = '';
  error = false;

  constructor(public userService: UserService, public messageService: MessageService) {
  }

  chatBox(): void {
    if (this.userService.userOnline !== undefined) {
      const mailBox = [];
      mailBox.push(this.message);
      this.messageService.message.push({
        user: this.userService.userOnline,
        date: new Date(),
        message: mailBox
      });
      this.error = false;
    } else {
      this.error = true;
    }
  }

}
