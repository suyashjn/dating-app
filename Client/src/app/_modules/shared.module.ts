import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbCollapseModule, NgbDropdownModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    NgbCollapseModule,
    NgbDropdownModule,
    FontAwesomeModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right",
    }),
  ],
  exports: [NgbModule, NgbCollapseModule, NgbDropdownModule, ToastrModule],
})
export class SharedModule {}
