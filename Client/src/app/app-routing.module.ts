import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { authGuard, redirectCheck } from "./_guards/auth.guard";
import { ServerErrorComponent } from "./errors/server-error/server-error.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent, canActivate: [redirectCheck] },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
    canActivate: [authGuard],
  },
  { path: "server-error", component: ServerErrorComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: "not-found", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
