import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectComponent } from "./project.component";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { CardComponent } from "./card/card.component";
import { ViewComponent } from "./view/view.component";
import { environment } from "environments/environment";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TimelineComponent } from "./timeline/timeline.component";
import { jqxKanbanModule } from "jqwidgets-ng/jqxkanban";

// Routes
const routes: Routes = [
  { path: "list", component: ListComponent, title: "Project - " + environment.title, data: { animation: "project" } },
  { path: "view/:id", component: ViewComponent, data: { animation: "project" } },
];

@NgModule({
  declarations: [ProjectComponent, ListComponent, CardComponent, ViewComponent, TimelineComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgbModule, jqxKanbanModule],
  exports: [CardComponent],
})
export class ProjectModule {}
