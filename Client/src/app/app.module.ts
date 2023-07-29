import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./_modules/shared.module";
import { FormsModule } from "@angular/forms";

import { ErrorInterceptor } from "./_interceptors/error.interceptor";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { ServerErrorComponent } from "./errors/server-error/server-error.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ServerErrorComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, HttpClientModule, SharedModule, FormsModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
