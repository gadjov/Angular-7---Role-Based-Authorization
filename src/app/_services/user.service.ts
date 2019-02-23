import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:4200/users`);
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:4200/${id}`);
  }
}