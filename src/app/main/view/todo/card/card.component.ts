import { Component, Input, OnInit } from "@angular/core";
import { todo } from "../todo.component";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() todo: todo;
  constructor() {}

  ngOnInit(): void {}
}
