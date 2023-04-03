import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CourseManagementService } from "../course-management.service";

@Component({
  selector: "app-course-table",
  templateUrl: "./course-table.component.html",
  styleUrls: ["./course-table.component.scss"],
})
export class CourseTableComponent implements OnInit {
  @Input() courses;

  constructor(private router: Router, private courseService: CourseManagementService) {}

  ngOnInit(): void {}

  redirectToView(id: number, index:number) {
    this.courseService.setCourse(this.courses[index]);
    this.router.navigate(["../course/view", id]);
  }
}
