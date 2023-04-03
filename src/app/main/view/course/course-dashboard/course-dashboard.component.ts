import { Component, OnInit } from "@angular/core";
import { CourseManagementService } from "../course-management.service";
import { Course } from "../interfaces";

@Component({
  selector: "app-course-dashboard",
  templateUrl: "./course-dashboard.component.html",
  styleUrls: ["./course-dashboard.component.scss"],
})
export class CourseDashboardComponent implements OnInit {
  public courseList: Array<Course>;
  public courseListHot: Array<Course>;
  public courseListOngoing: Array<Course>;
  constructor(private courseService: CourseManagementService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  async getCourses(): Promise<void> {
    if (this.courseService.listOfCourse) {
      this.courseList = this.courseService.listOfCourse;
      this.filterHot(this.courseList);
      this.filterOngoing(this.courseList);
      return;
    }

    let { data: course, error } = await this.courseService.getCourses();

    if (error) {
      console.error(error);
    } else {
      this.courseService.listOfCourse = course;
      this.courseList = course;

      this.filterHot(course);
      this.filterOngoing(course);
    }
  }

  filterHot(course) {
    this.courseListHot = course.filter((x: Course) => x.status == "NEW");
  }

  filterOngoing(course) {
    this.courseListOngoing = course.filter((x: Course) => x.status == "ONGOING");
  }
}
