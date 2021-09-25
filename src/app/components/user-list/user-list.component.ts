import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  users: User[] ;
  @Output() onDelete = new EventEmitter();

  constructor(
    private userService: UserService,
    private alertService: AlertService
  ) {
    this.getUsers();
  }

  getUsers() {
    this.userService.get().then((res: User[]) => {
      this.users = res;
    });
  }

  delete(user: User):void {
    this.userService.delete(user.id)
      .then(() => {
        this.onDelete.emit();
        this.alertService.show('User deleted');
      });
  }

}
