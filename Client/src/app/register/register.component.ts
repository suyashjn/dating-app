import { Component } from "@angular/core";
import { AccountService } from "../_services/account.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  model: any = {};

  constructor(private _accountService: AccountService, private _router: Router) {}

  register() {
    this._accountService.register(this.model).subscribe({
      next: (res) => {
        console.log(res);
        this._router.navigateByUrl("/home");
      },
      error: (err) => console.log(err),
    });
  }
}
