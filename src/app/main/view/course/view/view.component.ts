import { Component, OnInit } from "@angular/core";
import { todo } from "../../todo/todo.component";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"],
})
export class ViewComponent implements OnInit {
  public course = { id: 2, title: "Web Development", total_task: 15, completed: 20, due_date: "2022-10-31T09:00:00Z", status: "Completed", last_visited: "2022-10-31T09:00:00Z" };
  public todos: Array<todo> = [
    { id: 1, title: "Take the garbage out", is_completed: false, details: "get the items out of the garbag bag and throw it away", project_id: 1, course_id: 1, created_at: "2022-10-31T09:00:00Z", completed_at: "2022-10-31T09:00:00Z" },
    { id: 2, title: "Draw the todo list ui", is_completed: false, details: "get the items out of the garbag bag and throw it away", project_id: 1, course_id: 1, created_at: "2022-10-31T09:00:00Z", completed_at: "2022-10-31T09:00:00Z" },
    { id: 3, title: "Code the todo list", is_completed: false, details: "get the todo out of the garbag bag and throw it away", project_id: 1, course_id: 1, created_at: "2022-10-31T09:00:00Z", completed_at: "2022-10-31T09:00:00Z" },
  ];
  constructor() {}

  ngOnInit(): void {}
}
