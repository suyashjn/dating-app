import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbCollapseModule, NgbDropdownModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";

import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, RegisterComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    NgbCollapseModule,
    NgbDropdownModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
