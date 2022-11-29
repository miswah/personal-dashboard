import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  public subjects = [
    { code: "MCS01", title: "Software Engnring", block: 4, total_chapters: 16, completed_chapter: 5, next_chapter: "SDR for center", next_important_date: "2022-10-31T09:00:00Z" },
    { code: "MCS01", title: "Software Engnring", block: 4, total_chapters: 16, completed_chapter: 5, next_chapter: "SDR for center", next_important_date: "2022-10-31T09:00:00Z" },
  ];
  constructor() {}

  ngOnInit(): void {}
}
