import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

public getUser(filter:any): Observable<UserModel[]> {
  return this.http.get<UserModel[]>('user', {
    params: filter
  })
}

}
