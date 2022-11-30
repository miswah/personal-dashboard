import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  public subjects = [
    { id: 1, code: "MCS01", title: "Software Dev", block: 4, total_chapters: 16, completed_chapter: 5, next_chapter: "SDR for center", next_important_date: "2022-10-31T09:00:00Z" },
    { id: 2, code: "MCS01", title: "Software Dev", block: 4, total_chapters: 16, completed_chapter: 5, next_chapter: "SDR for center", next_important_date: "2022-10-31T09:00:00Z" },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToView(id: number) {
    this.router.navigate(["../subject/view", id]);
  }
}
