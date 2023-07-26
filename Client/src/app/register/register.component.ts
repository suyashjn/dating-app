import { Component } from "@angular/core";
import { AccountService } from "../_services/account.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  model: any = {};

  constructor(
    private _router: Router,
    private _accountService: AccountService,
    private _toastrService: ToastrService
  ) {}

  register() {
    this._accountService.register(this.model).subscribe({
      next: (_) => this._router.navigateByUrl("/user"),
      error: (err) => this._toastrService.error(err.error),
    });
  }
}
