import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import * as Highcharts from "highcharts/highcharts-gantt";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  @ViewChild("divRef", { static: false }) divReference: ElementRef;
  public projects = [
    { id: 1, title: "Android Development", total_task: 35, completed: 13, due_date: "2022-10-31T09:00:00Z", status: "Paused", last_visited: "2022-10-31T09:00:00Z" },
    { id: 2, title: "Web Development", total_task: 15, completed: 20, due_date: "2022-10-31T09:00:00Z", status: "Completed", last_visited: "2022-10-31T09:00:00Z" },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.highchartclick();
  }

  redirectToView(id: number) {
    this.router.navigate(["../project/view", id]);
  }

  highchartclick() {
    Highcharts.ganttChart(this.divReference.nativeElement as HTMLElement, {
      title: {
        text: "Projects Timeline",
      },
      chart: { renderTo: this.divReference.nativeElement as HTMLElement },
      navigator: {
        enabled: true,
        series: {
          type: "gantt",
          pointPadding: 0.25,
          accessibility: {
            enabled: false,
          },
        },
        yAxis: {
          min: 0,
          max: 3,
          reversed: true,
          categories: [],
        },
      },

      scrollbar: {
        enabled: true,
      },

      rangeSelector: {
        enabled: true,
        selected: 0,
      },
      series: [
        {
          name: "Project 1",
          type: "gantt",
          data: [
            {
              id: "s",
              name: "Start prototype",
              completed: {
                amount: 0.2,
              },
            },
            {
              id: "b",
              name: "Develop",
              start: Date.UTC(2022, 11, 17),
              end: Date.UTC(2022, 11, 20),
              parent: "s",
            },
            {
              id: "a",
              name: "Run acceptance tests",
              start: Date.UTC(2022, 11, 19),
              end: Date.UTC(2022, 11, 22),
              dependency: "s",
            },
            {
              name: "Test prototype",
              start: Date.UTC(2022, 11, 25),
              end: Date.UTC(2022, 11, 30),
              dependency: ["a", "b"],
            },
          ],
        },
      ],
    });
  }
}
