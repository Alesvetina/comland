import { Component, OnInit } from '@angular/core';
import { UserService } from "./../../services/user.service";
import { User } from "./../../models/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[];

  constructor(
    private userService:UserService
  ) {
    this.users = [];
  }

  ngOnInit():void {
    this.getUsers();
  }

  getUsers() {
    this.userService.get().then((res: any) => {
      this.users = <User[]>res;
    });
  }

  execOnAdd() {
    this.getUsers();
  }

  execOnDelete($event:any) {
    this.getUsers();
  }

}
