import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { User } from "../_models/user.model";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  baseurl = "https://localhost:5001/api";
  currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private _httpClient: HttpClient) {}

  login(model: any): Observable<User> {
    return this._httpClient.post<User>(`${this.baseurl}/account/login`, model).pipe(
      tap((res: User) => {
        if (res) {
          localStorage.setItem("user", JSON.stringify(res));
          this.currentUserSource.next(res);
        }
      })
    );
  }

  register(model: any): Observable<User> {
    return this._httpClient.post<User>(`${this.baseurl}/account/register`, model).pipe(
      tap((res: User) => {
        if (res) {
          localStorage.setItem("user", JSON.stringify(res));
          this.currentUserSource.next(res);
        }
      })
    );
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem("user");
    this.currentUserSource.next(null);
  }
}
