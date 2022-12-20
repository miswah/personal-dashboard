import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SubjectsManagementService } from "../subjects-management.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  public subjects = [
    { id: 1, code: "MCS01", title: "Software Dev", block: 4, total_chapters: 16, completed_chapter: 5, next_chapter: "SDR for center", next_important_date: "2022-10-31T09:00:00Z" },
    { id: 2, code: "MCS01", title: "Software Dev", block: 4, total_chapters: 16, completed_chapter: 5, next_chapter: "SDR for center", next_important_date: "2022-10-31T09:00:00Z" },
  ];
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
