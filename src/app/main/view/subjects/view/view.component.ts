import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ViewComponent implements OnInit {
  public subject = { id: 1, code: "MCS01", title: "Software Dev", block: 4, total_chapters: 16, completed_chapter: 5, next_chapter: "SDR for center", next_important_date: "2022-10-31T09:00:00Z" };

  public chapters = [
    { title: "Software Development Cycle", is_completed: true, block: 1 },
    { title: "Waterfall cycle", is_completed: false, block: 1 },
  ];

  public topics = [{ title: "SRD", chapter: "Waterfall cycle", is_completed: true }];
  constructor() {}

  ngOnInit(): void {}
}
