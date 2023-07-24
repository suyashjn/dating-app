import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;

  constructor(private _httpClient: HttpClient) {}

  ngOnInit(): void {
    // this.getUsers();
  }

  getUsers() {
    this._httpClient.get("https://localhost:5001/api/users").subscribe({
      next: (res: any) => (this.users = res),
      error: (err) => console.log(err),
    });
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }
}
