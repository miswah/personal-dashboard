import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CourseManagementService } from "../course-management.service";
import { Course, Module } from "../interfaces";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"],
})
export class ViewComponent implements OnInit {
 public course:Course;
 private courseId:number;
 public modules: Module[];
  
  constructor(private route: ActivatedRoute, private courseService: CourseManagementService) {}

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.paramMap.get("id");

  
    if(this.courseId == this.courseService.getCourse()?.id){
      this.course = this.courseService.getCourse();
    } else {
      this.refreshCourse();
    }
  }

//Incase of courseService course variable doesn't has correct data
  async refreshCourse() {
    let {data:course, error} = await this.courseService.fetchCourse(this.courseId);
    if(error){
      console.error(error);
    } else {
      this.courseService.setCourse(course[0])
      this.course = course[0];
    }
  }

  async getModules() {
    if(this.courseService?.modules && this.courseService.modules[0].course_id == this.courseId){
      this.modules = this.courseService.modules;
    } else {

    }
  }

}
