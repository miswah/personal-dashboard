import { Component, OnInit } from "@angular/core";
import { ProjectManagementService } from "../project-management.service";
import { Project } from "../interfaces";

@Component({
  selector: "app-project-dashboard",
  templateUrl: "./project-dashboard.component.html",
  styleUrls: ["./project-dashboard.component.scss"],
})
export class ProjectDashboardComponent implements OnInit {
  public projects: Project[];

  constructor(private projectService: ProjectManagementService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  async getProjects(): Promise<void> {
    //To avoid multiple api calls for same data check if data exists
    if (this.projectService.listOfProjects) {
      this.projects = this.projectService.listOfProjects;
      return;
    }

    let { data: projects, error } = await this.projectService.getProjects();
    if (error) {
      console.error("error", error.message);
    } else {
      this.projectService.listOfProjects = projects;
      this.projects = projects;
    }
  }
}
