import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { ListsComponent } from "./lists/lists.component";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { MemberDetailComponent } from "./members/member-detail/member-detail.component";
import { MessagesComponent } from "./messages/messages.component";
import { UserComponent } from "./user.component";

@NgModule({
  declarations: [
    ListsComponent,
    MemberListComponent,
    MemberDetailComponent,
    MessagesComponent,
    UserComponent,
  ],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
