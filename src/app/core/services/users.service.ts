
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IUser } from './../models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseApi = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseApi}/users`);
  }
}
