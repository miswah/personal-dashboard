import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SubjectsManagementService } from "../subjects-management.service";
import { id } from "@swimlane/ngx-datatable";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ViewComponent implements OnInit {
  public subject;
  public chapters = [];

  public topics;

  private subjectId: number = 0;

  constructor(private route: ActivatedRoute, private subjectService: SubjectsManagementService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((prams) => {
      this.subjectId = +prams.get("id");
    });
    this.getSubject(this.subjectId);
    this.getChapters(this.subjectId);
    this.getTopics(this.subjectId);
  }

  async getSubject(subjectId: number): Promise<void> {
    if (this.subjectService.subjectData && this.subjectService.subjectData.id == subjectId) {
      this.subject = this.subjectService.subjectData;
      return;
    }

    let { data: subject, error } = await this.subjectService.getSubjectViaId(subjectId);

    if (error) {
      console.error("subject error", error.message);
    } else {
      this.subjectService.subjectData = subject[0];
      this.subject = subject[0];
    }
  }

  async getChapters(subjectId: number): Promise<void> {
    if (this.subjectService.listOfChapters && this.subjectService.listOfChapters[0].subject_id == subjectId) {
      this.chapters = this.subjectService.listOfChapters;
      return;
    }

    let { data: chapters, error } = await this.subjectService.getChapters(subjectId);

    if (error) {
      console.error("error", error.message);
    } else {
      this.subjectService.listOfChapters = chapters;
      this.chapters = chapters;
    }

    this.subjectService.getChapters(subjectId);
  }

  async getTopics(subjectId: number): Promise<void> {
    if (this.subjectService.listOfTopics && this.subjectService.listOfTopics[0]?.subject_id == subjectId) {
      this.topics = this.subjectService.listOfTopics;
      return;
    }

    let { data: topics, error } = await this.subjectService.getTopics(subjectId);

    if (error) {
      console.error("error", error.message);
    } else {
      this.subjectService.listOfTopics = topics;
      this.topics = topics;
    }
  }

  async updateChapterStatus(chapterId: number): Promise<void> {
    let { data: chapter, error } = await this.subjectService.updateChapterStatus(chapterId, true);

    if (error) {
      console.error("update Error", error.message);
    } else {
      console.log("success", chapter);
      let index = this.chapters.findIndex((x) => x.id === chapterId);
      this.subjectService.listOfChapters[index].is_completed = true;
      this.chapters[index].is_completed = true;
    }
  }
}
