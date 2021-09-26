import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public status: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(
    protected storageService: StorageService
  ) { }

  async list() {
    return this.storageService.list()
      .then((response: any) => {
        if(response) {
          const users = response.map((data: User) => new User(data)).reverse();
          return users;
        } else {
          return [];
        }
      }
    );
  }

  async create(user: User) {
    let response = await this.storageService.create(user);
    this.changeStatus();
    return response;
  }

  async delete(id: string) {
    let response = await this.storageService.delete(id);
    this.changeStatus();
    return response;
  }

  changeStatus() {
    const newStatus = this.status.getValue() == 1 ? 0 : 1;
    this.status.next(newStatus);
  }

  public statusChange(): Observable<number> {
    return this.status.asObservable();
  }
}
