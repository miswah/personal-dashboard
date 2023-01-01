import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { Course } from "../types";

@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CourseCardComponent implements OnInit {
  @Input() course: Course;

  constructor() {}

  ngOnInit(): void {}
}
