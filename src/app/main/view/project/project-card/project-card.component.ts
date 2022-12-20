import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-project-card",
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectCardComponent implements OnInit {
  @Input() project;
  constructor() {}

  ngOnInit(): void {}
}
