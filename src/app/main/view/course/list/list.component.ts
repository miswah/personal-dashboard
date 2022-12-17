import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  public courses = [
    { id: 1, title: "Android Development", total_task: 35, completed: 13, due_date: "2022-10-31T09:00:00Z", status: "Paused", last_visited: "2022-10-31T09:00:00Z" },
    { id: 2, title: "Web Development", total_task: 15, completed: 20, due_date: "2022-10-31T09:00:00Z", status: "Completed", last_visited: "2022-10-31T09:00:00Z" },
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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToView(id: number) {
    this.router.navigate(["../course/view", id]);
  }
}
