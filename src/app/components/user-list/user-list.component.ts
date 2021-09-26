import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  users: User[] = [];

  constructor(
    private userService: UserService,
    private alertService: AlertService
  ) {
    this.userService.statusChange().subscribe(() => {
      this.getUsers();
    });
  }

  getUsers() {
    this.userService.list().then((res: User[]) => {
      this.users = res;
    });
  }

  delete(user: User):void {
    this.userService.delete(user.id)
      .then(() => {
        this.alertService.show('User deleted');
      });
  }

}
