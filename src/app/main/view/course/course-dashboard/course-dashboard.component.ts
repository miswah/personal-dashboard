import { Component, OnInit } from "@angular/core";
import { CourseManagementService } from "../course-management.service";

@Component({
  selector: "app-course-dashboard",
  templateUrl: "./course-dashboard.component.html",
  styleUrls: ["./course-dashboard.component.scss"],
})
export class CourseDashboardComponent implements OnInit {
  public courseList;
  constructor(private courseService: CourseManagementService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  async getCourses(): Promise<void> {
    let { data: course, error } = await this.courseService.getCourses();

    if (error) {
      console.error(error);
    } else {
      this.courseList = course;
    }
  }
}
