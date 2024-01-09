import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserEntity } from 'src/Interfaces/UserEntity';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient ) { }

  Get() : Observable<any>
  {
    return this.http.get<any>("https://reqres.in/api/users?page=1");
  }
}
