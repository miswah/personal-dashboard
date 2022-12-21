import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SubjectsManagementService } from "../subjects-management.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  public subjects = [];
  constructor(private router: Router, private subjectService: SubjectsManagementService) {}

  ngOnInit(): void {
    this.getAllSubjects();
  }

  async getAllSubjects(): Promise<void> {
    //To avoid multiple api calls for same data check if data exists
    if (this.subjectService.listOfSubjects) {
      this.subjects = this.subjectService.listOfSubjects;
      return;
    }

    let { data: subjects, error } = await this.subjectService.getSubjects();
    if (error) {
      console.error("error", error.message);
    } else {
      this.subjectService.listOfSubjects = subjects;
      this.subjects = subjects;
    }
  }

  redirectToView(id: number) {
    this.router.navigate(["../subject/view", id]);
  }
}
