import { Component, Input, OnInit } from "@angular/core";
import { Course } from "../types";

@Component({
  selector: "app-last-courses",
  templateUrl: "./last-courses.component.html",
  styleUrls: ["./last-courses.component.scss"],
})
export class LastCoursesComponent implements OnInit {
  // public courses = [
  //   { id: 1, title: "Android Development", total_task: 35, completed: 13, due_date: "2022-10-31T09:00:00Z", status: "Paused", last_visited: "2022-10-31T09:00:00Z", module: 25, last_visited_module: "CSS" },
  //   { id: 2, title: "Web Development", total_task: 15, completed: 20, due_date: "2022-10-31T09:00:00Z", status: "Completed", last_visited: "2022-10-31T09:00:00Z", module: 30, last_visited_module: "CSS" },
  //   { id: 2, title: "Web Development", total_task: 15, completed: 20, due_date: "2022-10-31T09:00:00Z", status: "Completed", last_visited: "2022-10-31T09:00:00Z", module: 30, last_visited_module: "CSS" },
  // ];

  @Input() courses: Array<Course>;
  constructor() {}

  ngOnInit(): void {}
}
