import { CanActivateFn, Router, UrlTree } from "@angular/router";
import { AccountService } from "../_services/account.service";
import { ToastrService } from "ngx-toastr";
import { inject } from "@angular/core";
import { User } from "../_models/user.model";
import { Observable, map } from "rxjs";

export const authGuard: CanActivateFn = (): Observable<boolean> => {
  const _accountService: AccountService = inject(AccountService);
  const _toastrService: ToastrService = inject(ToastrService);
  return _accountService.currentUser$.pipe(
    map((user: User | null) => {
      if (!!user) return true;
      else {
        _toastrService.error("You shall not pass!");
        return false;
      }
    })
  );
};

export const redirectCheck: CanActivateFn = (): Observable<boolean | UrlTree> => {
  const _router: Router = inject(Router);
  const _accountService: AccountService = inject(AccountService);
  return _accountService.currentUser$.pipe(
    map((user: User | null) => {
      if (!!user) return _router.createUrlTree(["/user"]);
      return true;
    })
  );
};
