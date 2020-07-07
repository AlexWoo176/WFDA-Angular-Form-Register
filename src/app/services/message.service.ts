import {Injectable} from '@angular/core';
import {Message} from '../interface/message';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: Message[] = [];

  constructor(public userService: UserService) {
  }
}
