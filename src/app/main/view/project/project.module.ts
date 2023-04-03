import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectComponent } from "./project.component";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { ViewComponent } from "./view/view.component";
import { environment } from "environments/environment";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TimelineComponent } from "./timeline/timeline.component";
import { jqxKanbanModule } from "jqwidgets-ng/jqxkanban";
import { ProjectCardComponent } from "./project-card/project-card.component";
import { SwiperModule } from "ngx-swiper-wrapper";
import { ProjectDashboardComponent } from "./project-dashboard/project-dashboard.component";

// Routes
const routes: Routes = [
  { path: "list", component: ProjectDashboardComponent, title: "Project - " + environment.title, data: { animation: "project" } },
  { path: "view/:id", component: ViewComponent, data: { animation: "project" } },
];

@NgModule({
  declarations: [ProjectComponent, ListComponent, ViewComponent, TimelineComponent, ProjectCardComponent, ProjectDashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgbModule, jqxKanbanModule, SwiperModule],
  exports: [ProjectCardComponent],
})
export class ProjectModule {}
