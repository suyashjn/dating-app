import { Component, OnInit } from "@angular/core";
import { AccountService } from "../_services/account.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private router: Router, private _accountService: AccountService, private _toastrService: ToastrService) {}

  ngOnInit(): void {}

  login() {
    this._accountService.login(this.model).subscribe({
      next: (_) => this.router.navigateByUrl("/user"),
      error: (err) => this._toastrService.error(err.error),
    });
  }
}
