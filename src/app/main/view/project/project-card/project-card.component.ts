import { Component, Input, OnInit } from "@angular/core";
import { Project } from "../interfaces";

@Component({
  selector: "app-project-card",
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.scss"],
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;

  public total_tasks: number = 100;
  public completed_tasks: number = 10;

  constructor() {}

  ngOnInit(): void {}
}
