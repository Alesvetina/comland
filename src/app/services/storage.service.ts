import { Injectable } from '@angular/core';
import { openDB } from 'idb';

const table = 'users';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  dbPromise: any;

  constructor(
  ) {
    this.dbPromise = openDB('keyval-store', 1, {
      upgrade(db: any) {
        db.createObjectStore(table);
      },
    })
  }

  async get(key: string) {
    return (await this.dbPromise).get(table, key);
  }
  async list() {
    let users = [];
    const keys = await this.keys();
    for(let key of keys) {
      let user = await this.get(key);
      user.id = key;
      users.push(user);
    }
    return users;
  }

  async set(val: any) {
    const keys = await this.keys();
    let key = 1;
    if(keys.length > 0) {
      key = Math.max(...keys) + 1;
    }
    return (await this.dbPromise).put(table, val, key);
  }

  async delete(key: string) {
    return (await this.dbPromise).delete(table, key);
  }

  async keys() {
    return (await this.dbPromise).getAllKeys(table);
  }
}