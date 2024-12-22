import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../interfaces/user-req.interfaces';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUserById(id: number): Observable<User> {
    return this.httpClient
      .get(`https://reqres.in/api/users/${id}`)
      .pipe(
        map((response: any) => response.data)
      );

  }
}
