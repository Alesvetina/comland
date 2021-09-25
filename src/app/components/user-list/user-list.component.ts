import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from "../../models/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Output() onDelete = new EventEmitter();
  @Input() users: any;

  constructor(private userService:UserService) {
  }

  delete(user: User):void {
    this.userService.delete(user.id)
      .then(response => {
        alert("User deleted");
        this.onDelete.emit();
      });
  }

}
