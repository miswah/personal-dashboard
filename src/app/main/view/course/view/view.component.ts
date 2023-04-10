import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CourseManagementService } from "../course-management.service";
import { Chapter, Course, CourseComment, CourseProject, ExternalResource, Module } from "../interfaces";
import { log } from "console";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"],
})
export class ViewComponent implements OnInit {
 public course:Course;
 private courseId:number;
 public modules: Module[] = [];
 public chapters: Chapter[] = [];

public externalResources:ExternalResource[] = [];

public comments : CourseComment[] = [];

public projects:CourseProject[] = [];
  
  constructor(private route: ActivatedRoute, private courseService: CourseManagementService, private router: Router) {}

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.paramMap.get("id");
      this.getCourse();
      this.getModules();
      this.getChapters();
      this.getExternalResource();
      this.getComments();
      this.getProjects();
  }


  async getCourse() {
    if(this.courseId == this.courseService.getCourse()?.id){
      this.course = this.courseService.getCourse();
    } else {
      let {data:course, error} = await this.courseService.fetchCourse(this.courseId);
      if(error){
        console.error(error);
      } else {
        this.courseService.setCourse(course[0])
        this.course = course[0];
      }
    }
  }

  async getModules() {
    if(this.courseService?.modules && this.courseService.modules[0].course_id == this.courseId){
      this.modules = this.courseService.modules;
    } else {
      let {data:modules, error} = await this.courseService.getModules(this.courseId);
      if(error){
        console.log(error);
      } else {
        this.courseService.modules = modules;
        this.modules = modules;
      }
    }
  }


  async getChapters() {
    if(this.courseService?.chapters && this.courseService.chapters[0].course_id == this.courseId){
      this.chapters = this.courseService.chapters;
    } else {
      let {data:chapters, error} = await this.courseService.getChapters(this.courseId);
      if(error){
        console.log(error);
      } else {
        this.courseService.chapters = chapters;
        this.chapters = chapters;
      }
    }
  }

  async getExternalResource(){
    if(this.courseService?.externalResource && this.courseService.externalResource[0].course_id == this.courseId){
      this.externalResources = this.courseService.externalResource;
    } else {
      let {data:externalResources, error} = await this.courseService.getExternalResources(this.courseId);
      if(error){
        console.error(error);
      } else {
        this.courseService.externalResource = externalResources;
        this.externalResources = externalResources
      }
    }
  }


  async getComments(){
    if(this.courseService?.comments && this.courseService.comments[0].course_id == this.courseId){
      this.comments = this.courseService.comments;
    } else {
      let {data:comments, error} = await this.courseService.getComments(this.courseId);

      if(error){
        console.error(error);
      } else {
        this.courseService.comments = comments;
        this.comments = comments;
      }
    }
  }


  filterChapters(id:number):Chapter[]{
    let chap = this.chapters.filter(x => x.module_id == id);
    return chap;
  }

  async saveNewComment(value:string){
    
    let {data:comment, error} = await this.courseService.createNewComment({comment:value, course_id: this.courseId});

    if(error){
      console.error(error);
    } else {
      let today = new Date(Date.now.toString());
      
      let com = {created_at : today.toJSON(), comment: value, course_id: this.courseId, id:0};
      this.comments.push(com)
      this.courseService.comments = this.comments
    }
  }

  async getProjects(){
    if(this.courseService?.projects && this.courseService.projects[0].course_id == this.courseId){
      this.projects = this.courseService.projects;
    } else {
      let {data:projects, error} = await this.courseService.getCourseProjects(this.courseId);

      if(error){
        console.error(error);
      } else {
        this.courseService.projects = projects;
        this.projects = projects;
      }
    }
  }


  redirectToView(projectId:number){
    console.log("asd")
      this.router.navigate(["../../../project/view", projectId])
  }

  async changeStatusOfChapter(id, status){
   let {data:chapter, error} = await this.courseService.updateChapterStatus(id, status);

   if(error){
    console.error(error);
   }
  }
}
