import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseComponent } from "./course.component";
import { ListComponent } from "./list/list.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { ViewComponent } from "./view/view.component";
import { RouterModule, Routes } from "@angular/router";
import { environment } from "environments/environment";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CourseCardComponent } from "./course-card/course-card.component";
import { SwiperModule } from "ngx-swiper-wrapper";
import { LastCoursesComponent } from "./last-courses/last-courses.component";
import { CourseActivityComponent } from "./course-activity/course-activity.component";
import { CourseDashboardComponent } from "./course-dashboard/course-dashboard.component";
import { NgApexchartsModule } from "ng-apexcharts";
import { CourseTableComponent } from "./course-table/course-table.component";

// Routes
const routes: Routes = [
  { path: "", component: CourseDashboardComponent, title: "Course - " + environment.title, data: { animation: "course" } },
  { path: "view/:id", component: ViewComponent, data: { animation: "course" } },
];
@NgModule({
  declarations: [CourseComponent, ListComponent, TimelineComponent, ViewComponent, CourseCardComponent, LastCoursesComponent, CourseActivityComponent, CourseDashboardComponent, CourseTableComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgbModule, SwiperModule, NgApexchartsModule],
})
export class CourseModule {}
