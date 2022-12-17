import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-course-table",
  templateUrl: "./course-table.component.html",
  styleUrls: ["./course-table.component.scss"],
})
export class CourseTableComponent implements OnInit {
  public courses = [
    { id: 1, title: "Android Development", total_task: 35, completed: 13, due_date: "2022-10-31T09:00:00Z", status: "Paused", last_visited: "2022-10-31T09:00:00Z", last_visited_module: "CSS", project: "BOX PAGE", modules: 20, completed_modules: 10 },
    { id: 2, title: "Web Development", total_task: 15, completed: 20, due_date: "2022-10-31T09:00:00Z", status: "Completed", last_visited: "2022-10-31T09:00:00Z", last_visited_module: "Figma", project: "USER FLOW", modules: 20, completed_modules: 10 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
