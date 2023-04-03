import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { Course } from "../interfaces";
import { CourseManagementService } from "../course-management.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  @Input() courses : Course;

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

  constructor(private router: Router, private courseService: CourseManagementService) {}

  ngOnInit(): void {}

  redirectToView(id: number, index: number) {
    this.courseService.setCourse(this.courses[index]);
    this.router.navigate(["../course/view", id]);
  }
}
