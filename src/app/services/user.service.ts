import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from '../../environments/environment';
import { User } from "../models/user";

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    protected http:HttpClient
  ) { }

  get() {
    return this.http.get<User>(environment.api_url + 'users', this.prepareRequestOptions())
      .toPromise()
      .then((response: any) => {
        console.log(response);
        // return this.getLastPage(response._meta.pageCount);
      });
  }

  getLastPage(page: string) {
    return this.http.get<User>(environment.api_url + 'users?page=' + page, this.prepareRequestOptions())
      .pipe(
        map((response: any) => {
          const array = response.result as any[];
          const users = array.map(data => new User(data)).reverse();
          return users;
        })
      ).toPromise();
  }

  create(user:User) {
    //last_name is required in API, but not used in this application
    user.last_name = "test";
    user.status = "active";
    return this.http.post(environment.api_url + 'users', user, this.prepareRequestOptions())
      .toPromise()
      .then((response:any) => {
        return response;
      });
  }

  delete(id:string) {
    return this.http.delete(environment.api_url + 'users/' + id, this.prepareRequestOptions())
      .toPromise()
      .then((response:any) => {
        return response;
      });
  }

  public prepareRequestOptions() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + environment.token
    });
    const options = {headers: headers};
    return options;
  }
}
