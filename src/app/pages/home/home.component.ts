import { Component, ViewChild } from '@angular/core';
import { UserService } from "./../../services/user.service";
import { User } from "./../../models/user";
import { UserListComponent } from './../../components/user-list/user-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild(UserListComponent) userListComponent: UserListComponent;

  constructor( ) { }

  onAdd() {
    this.userListComponent.getUsers();
  }

  onDelete() {
    this.userListComponent.getUsers();
  }

}
