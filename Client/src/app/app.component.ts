import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Client";
  users: any;

  constructor(private _httpClient: HttpClient) {}

  ngOnInit(): void {
    this._httpClient.get("https://localhost:5001/api/users").subscribe({
      next: (res: any) => (this.users = res),
      error: (err) => console.log(err),
    });
  }
}
