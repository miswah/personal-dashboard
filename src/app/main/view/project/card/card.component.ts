import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-project-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() project;
  constructor() {}

  ngOnInit(): void {}
}
