import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent {

  user: User = new User();
  submitted = false;

  form: FormGroup = new FormGroup({
    name: new FormControl(this.user.name || '', Validators.required),
    gender: new FormControl(this.user.gender || '', Validators.required),
    email: new FormControl(this.user.email || '', [Validators.email]),
    phone: new FormControl(this.user.phone || '')
  });

  constructor(
    private userService: UserService,
    private alertService: AlertService
  ) { }

  get f() { return this.form.controls; }

  add():void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.user = this.form.value;
    this.userService.create(this.user)
      .then(() => {
        this.clear();
        this.submitted = false;
        this.alertService.show('User added');
      });
  }

  clear() {
    this.form.reset();
  }

}
