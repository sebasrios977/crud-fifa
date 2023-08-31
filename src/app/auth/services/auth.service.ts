import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: boolean = false;
  public currentUser?: FormGroup;
  private baseUrl: string = 'https://wo-fifa.azurewebsites.net';

  constructor(private http: HttpClient) { }

  login(user: FormGroup): Observable<boolean> {
    this.isLogged = true;
    this.currentUser = user;
    const url = `${this.baseUrl}/login`;
    return this.http.post(url, user.value)
      .pipe(
        tap(data => console.log(data)),
        map( () => true ),
      )
  }

  logout(user: FormGroup): Observable<boolean> {
    this.isLogged = false;
    this.currentUser!.reset();
    const url = `${this.baseUrl}/logout`;
    this.http.post(url, user);
    return this.http.post(url, user.value)
    .pipe(
      map( () => false ),
    )
  }
}
