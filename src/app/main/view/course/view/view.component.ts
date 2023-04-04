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
 public course:Course =
  {
    "id": 1,
    "created_at": "2023-01-01T10:59:26.570977+00:00",
    "title": "Microservices with springboot",
    "status": "NEW",
    "total_tasks": null,
    "completed_tasks": null,
    "total_modules": 12,
    "completed_modules": 1,
    "due_date": null,
    "last_visited": null,
    "started_at": "2023-01-01T10:59:09+00:00",
    "last_visited_module": "Introduction to sprintboot",
    "link": "https://www.dailycodebuffer.in/s/courses/62de4bf90cf2b7be754707d8/take",
    "tags_id": 1
  };
 private courseId:number;
 public modules: Module[] = [
  {
    "id": 1,
    "name": "Microservices with Springboot Introduction",
    "status": false,
    "course_id": 1,
    "number": 1
  },
  {
    "id": 2,
    "name": "Introduction to sprintboot",
    "status": false,
    "course_id": 1,
    "number": 2
  }
];
 public chapters: Chapter[] = [
  {
    "id": 1,
    "created_at": "2023-04-03T17:39:22.81749+00:00",
    "title": "Course Introduction",
    "status": false,
    "module_id": 1,
    "course_id": 1
  },
  {
    "id": 2,
    "created_at": "2023-04-03T17:39:40.068016+00:00",
    "title": "Course Repo Details",
    "status": false,
    "module_id": 1,
    "course_id": 1
  },
  {
    "id": 3,
    "created_at": "2023-04-03T17:41:13.606249+00:00",
    "title": "What is Sprintboot?",
    "status": false,
    "module_id": 2,
    "course_id": 1
  },
  {
    "id": 4,
    "created_at": "2023-04-03T17:41:25.126259+00:00",
    "title": "What is Dependecy Injection?",
    "status": false,
    "module_id": 2,
    "course_id": 1
  },
  {
    "id": 5,
    "created_at": "2023-04-03T17:41:44.141527+00:00",
    "title": "Spring Initializr",
    "status": false,
    "module_id": 2,
    "course_id": 1
  },
  {
    "id": 6,
    "created_at": "2023-04-03T17:42:03.891449+00:00",
    "title": "Setting up IDE",
    "status": false,
    "module_id": 2,
    "course_id": 1
  },
  {
    "id": 7,
    "created_at": "2023-04-03T17:43:02.596991+00:00",
    "title": "Springboot starters projects",
    "status": false,
    "module_id": 2,
    "course_id": 1
  },
  {
    "id": 8,
    "created_at": "2023-04-03T17:43:34.165055+00:00",
    "title": "Understanding Springboot Magic",
    "status": false,
    "module_id": 2,
    "course_id": 1
  },
  {
    "id": 9,
    "created_at": "2023-04-03T17:43:45.594623+00:00",
    "title": "Embedded Servers",
    "status": false,
    "module_id": 2,
    "course_id": 1
  },
  {
    "id": 10,
    "created_at": "2023-04-03T17:44:02.486073+00:00",
    "title": "Springboot Actuator",
    "status": false,
    "module_id": 2,
    "course_id": 1
  },
  {
    "id": 11,
    "created_at": "2023-04-03T17:44:14.544462+00:00",
    "title": "Devtools",
    "status": true,
    "module_id": 2,
    "course_id": 1
  }
];

public externalResources:ExternalResource[] = [
  {
    "id": 1,
    "label": "Notes",
    "url": "https://www.notion.so/Java-Notes-92cf841d758a4e47819bba13e181155d",
    "course_id": 1
  }
];

public comments : CourseComment[] = [
  {
    "id": 1,
    "created_at": "2023-04-04T13:40:21.649701+00:00",
    "comment": "test comment",
    "course_id": 1
  },
  {
    "id": 2,
    "created_at": "2023-04-04T13:40:21.649701+00:00",
    "comment": "asdqwe qwe qwe this was ta best dat?",
    "course_id": 1
  },
  {
    "id": 3,
    "created_at": "2023-04-04T13:40:21.649701+00:00",
    "comment": "please checkout the method for these ",
    "course_id": 1
  },
  {
    "id": 4,
    "created_at": "2023-04-04T13:40:21.649701+00:00",
    "comment": "pink purple and red",
    "course_id": 1
  }
];

public projects:CourseProject[] = [
  {
    "title": "Mission Logs",
    "url": "https://www.notion.so/Java-Notes-92cf841d758a4e47819bba13e181155d",
    "tags": [
      "CSS",
      "HTML",
      "Angular"
    ],
    "course_id": 1,
    "id": 1
  }
];
  
  constructor(private route: ActivatedRoute, private courseService: CourseManagementService, private router: Router) {}

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.paramMap.get("id");
      // this.getCourse();
      // this.getModules();
      // this.getChapters();
      // this.getExternalResource();
      // this.getComments();
      // this.getProjects();
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
