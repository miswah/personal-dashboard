import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseComponent } from "./course.component";
import { CardComponent } from "./card/card.component";
import { ListComponent } from "./list/list.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { ViewComponent } from "./view/view.component";
import { RouterModule, Routes } from "@angular/router";
import { environment } from "environments/environment";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// Routes
const routes: Routes = [
  { path: "", component: ListComponent, title: "Course - " + environment.title, data: { animation: "course" } },
  { path: "view/:id", component: ViewComponent, data: { animation: "course" } },
];
@NgModule({
  declarations: [CourseComponent, CardComponent, ListComponent, TimelineComponent, ViewComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgbModule],
})
export class CourseModule {}
