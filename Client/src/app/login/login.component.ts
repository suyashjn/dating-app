import { Component, OnInit } from "@angular/core";
import { AccountService } from "../_services/account.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private _accountService: AccountService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this._accountService.login(this.model).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("/home");
      },
      error: (err) => console.log(err),
    });
  }
}
