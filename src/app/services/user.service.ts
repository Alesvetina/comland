import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { map } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    protected storageService: StorageService
  ) { }

  async get() {
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
    let response = await this.storageService.set(user);
    return response;
  }

  async delete(id: string) {
    let response = await this.storageService.delete(id);
    return response;
  }
}
