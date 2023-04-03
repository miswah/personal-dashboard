import { Component, Input, OnInit } from "@angular/core";
import { Course } from "../interfaces";
import { Router } from "@angular/router";
import { CourseManagementService } from "../course-management.service";

@Component({
  selector: "app-last-courses",
  templateUrl: "./last-courses.component.html",
  styleUrls: ["./last-courses.component.scss"],
})
export class LastCoursesComponent implements OnInit {
  @Input() courses: Array<Course>;
  constructor(private router: Router, private courseService: CourseManagementService) {}

  ngOnInit(): void {}

  redirectToView(id: number, index:number) {
    this.courseService.setCourse(this.courses[index]);
    this.router.navigate(["../course/view", id]);
  }
}
