import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent {

  @Output() onAdd = new EventEmitter();
  user:User = new User();

  form:FormGroup = new FormGroup({
    first_name: new FormControl(this.user.first_name || '', Validators.required),
    gender: new FormControl(this.user.gender || '', Validators.required),
    email: new FormControl(this.user.email || '', [Validators.required, Validators.email]),
    phone: new FormControl(this.user.phone || '', Validators.required)
  });

  constructor(private userService:UserService) {
  }

  add():void {
    this.user = this.form.value;
    this.userService.create(this.user)
      .then(response => {
        alert("User added");
        this.clear();
        this.onAdd.emit();
      });
  }

  clear() {
    this.form.reset();
  }

}
