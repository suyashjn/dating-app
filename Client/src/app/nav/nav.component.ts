import { Component } from "@angular/core";
import { AccountService } from "../_services/account.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent {
  isCollapsed = true;

  constructor(public accountService: AccountService, private _router: Router) {}

  logout() {
    this.accountService.logout();
    this._router.navigateByUrl("/home");
  }
}
