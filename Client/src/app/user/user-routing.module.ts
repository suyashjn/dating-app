import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListsComponent } from "./lists/lists.component";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { MemberDetailComponent } from "./members/member-detail/member-detail.component";
import { MessagesComponent } from "./messages/messages.component";
import { UserComponent } from "./user.component";

const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      { path: "", redirectTo: "members", pathMatch: "full" },
      { path: "lists", component: ListsComponent },
      { path: "members", component: MemberListComponent },
      { path: "members/:id", component: MemberDetailComponent },
      { path: "messages", component: MessagesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
