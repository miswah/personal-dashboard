import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import * as Highcharts from "highcharts/highcharts-gantt";
import { jqxKanbanComponent } from "jqwidgets-ng/jqxkanban";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { ProjectManagementService } from "../project-management.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  @ViewChild("divRef", { static: false }) divReference: ElementRef;

  @ViewChild("myKanban", { static: false }) myKanban: jqxKanbanComponent;
  theme: any;
  fields: any[] = [
    { name: "id", type: "string" },
    { name: "status", map: "state", type: "string" },
    { name: "text", map: "label", type: "string" },
    { name: "tags", type: "string" },
    { name: "color", map: "hex", type: "string" },
    { name: "resourceId", type: "number" },
  ];

  public swiperswiperCenteredSlides: SwiperConfigInterface = {
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };

  public centeredSlideIndex = 1;

  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return "90%";
    }

    return 1570;
  }

  source: any = {
    localData: [
      { id: "1161", state: "new", label: "Make a new Dashboard", tags: "dashboard", hex: "#36c7d0", resourceId: 3 },
      { id: "1645", state: "work", label: "Prepare new release", tags: "release", hex: "#ff7878", resourceId: 1 },
      { id: "9213", state: "new", label: "One item added to the cart", tags: "cart", hex: "#96c443", resourceId: 3 },
      { id: "6546", state: "done", label: "Edit Item Price", tags: "price, edit", hex: "#ff7878", resourceId: 4 },
      { id: "9034", state: "new", label: "Login 404 issue", tags: "issue, login", hex: "#96c443" },
    ],
    dataType: "array",
    dataFields: this.fields,
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  resourcesAdapterFunc = (): any => {
    let resourcesSource = {
      localData: [
        { id: 0, name: "", image: "./../../../jqwidgets/styles/images/common.png", common: true },
        { id: 1, name: "", image: "./../../../images/andrew.png" },
        { id: 2, name: "", image: "./../../../images/janet.png" },
        { id: 3, name: "", image: "./../../../images/steven.png" },
        { id: 4, name: "", image: "./../../../images/nancy.png" },
        { id: 5, name: "", image: "./../../../images/Michael.png" },
        { id: 6, name: "", image: "./../../../images/margaret.png" },
        { id: 7, name: "", image: "./../../../images/robert.png" },
        { id: 8, name: "", image: "./../../../images/Laura.png" },
        { id: 9, name: "", image: "./../../../images/Anne.png" },
      ],
      dataType: "array",
      dataFields: [
        { name: "id", type: "number" },
        { name: "name", type: "string" },
        { name: "image", type: "string" },
        { name: "common", type: "boolean" },
      ],
    };
    let resourcesDataAdapter = new jqx.dataAdapter(resourcesSource);
    return resourcesDataAdapter;
  };
  getIconClassName = (): string => {
    switch (this.theme) {
      case "darkblue":
      case "black":
      case "shinyblack":
      case "ui-le-frog":
      case "metrodark":
      case "orange":
      case "darkblue":
      case "highcontrast":
      case "ui-sunny":
      case "ui-darkness":
        return "jqx-icon-plus-alt-white ";
    }
    return "jqx-icon-plus-alt";
  };
  columns: any[] = [
    { text: "Backlog", iconClassName: this.getIconClassName(), dataField: "new" },
    { text: "In Progress", iconClassName: this.getIconClassName(), dataField: "work" },
    { text: "Done", iconClassName: this.getIconClassName(), dataField: "done" },
  ];
  template: string = '<div class="jqx-kanban-item" id="">' + '<div class="jqx-kanban-item-color-status"></div>' + '<div style="display: none;" class="jqx-kanban-item-avatar"></div>' + '<div class="jqx-icon jqx-icon-close jqx-kanban-item-template-content jqx-kanban-template-icon"></div>' + '<div class="jqx-kanban-item-text"></div>' + '<div style="display: none;" class="jqx-kanban-item-footer"></div>' + "</div>";
  itemRenderer = (element: any, item: any, resource: any): void => {
    element[0].getElementsByClassName("jqx-kanban-item-color-status")[0].innerHTML = '<span style="line-height: 23px; margin-left: 5px;">' + resource.name + "</span>";
  };
  myKanbanOnItemAttrClicked(event: any): void {
    let args = event.args;
    if (args.attribute == "template") {
      this.myKanban.removeItem(args.item.id);
    }
  }
  itemIndex: number = 0;
  myKanbanonColumnAttrClicked(event: any): void {
    let args = event.args;
    if (args.attribute == "button") {
      args.cancelToggle = true;
      if (!args.column.collapsed) {
        let colors = ["#f19b60", "#5dc3f0", "#6bbd49", "#dddddd"];
        this.myKanban.addItem({
          status: args.column.dataField,
          text: '<input placeholder="(No Title)" style="width: 96%; margin-top:2px; border-radius: 3px;' + 'border-color: #ddd; line-height:20px; height: 20px;" class="jqx-input" id="newItem' + this.itemIndex + '" value= "" />',
          tags: "new task",
          color: colors[Math.floor(Math.random() * 4)],
          resourceId: Math.floor(Math.random() * 4),
        });
        let id = `newItem${this.itemIndex}`;
        let myInput = document.getElementById(id);
        if (myInput !== null && myInput !== undefined) {
          myInput.addEventListener("mousedown", (event: any): void => {
            event.stopPropagation();
          });
          myInput.addEventListener("mouseup", (event: any): void => {
            event.stopPropagation();
          });
          myInput.addEventListener("keydown", (event: any): void => {
            if (event.keyCode == 13) {
              let valueElement = `<span>${event.target.value}</span>`;
              event.target.insertAdjacentHTML("beforebegin", valueElement);
              event.target.remove();
            }
          });
          myInput.focus();
        }
        this.itemIndex++;
      }
    }
  }

  public projects = [
    { id: 1, title: "Android Development", total_task: 35, completed: 13, due_date: "2022-10-31T09:00:00Z", status: "Paused", last_visited: "2022-10-31T09:00:00Z" },
    { id: 2, title: "Web Development", total_task: 15, completed: 20, due_date: "2022-10-31T09:00:00Z", status: "Completed", last_visited: "2022-10-31T09:00:00Z" },
  ];

  constructor(private router: Router, private projectService: ProjectManagementService) {}

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
