import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

export interface todo {
  id: number;
  title: string;
  is_completed: boolean;
  details: string;
  project_id: number;
  course_id: number;
  created_at?: string;
  completed_at?: string;
}

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"],
})
export class TodoComponent implements OnInit {
  todo: Array<todo> = [
    { id: 1, title: "Take the garbage out", is_completed: false, details: "get the items out of the garbag bag and throw it away", project_id: 1, course_id: 1, created_at: "2022-10-31T09:00:00Z", completed_at: "2022-10-31T09:00:00Z" },
    { id: 2, title: "Draw the todo list ui", is_completed: false, details: "get the items out of the garbag bag and throw it away", project_id: 1, course_id: 1, created_at: "2022-10-31T09:00:00Z", completed_at: "2022-10-31T09:00:00Z" },
    { id: 3, title: "Code the todo list", is_completed: false, details: "get the todo out of the garbag bag and throw it away", project_id: 1, course_id: 1, created_at: "2022-10-31T09:00:00Z", completed_at: "2022-10-31T09:00:00Z" },
  ];

  public taskForm: UntypedFormGroup;

  constructor(private modalService: NgbModal, private _formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this._formBuilder.group({
      title: ["", Validators.required],
      details: ["", Validators.required],
    });
  }

  // modal Open Vertically Centered
  modalOpenVC(modalVC) {
    this.modalService.open(modalVC, {
      centered: true,
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.taskForm.controls;
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.taskForm.invalid) {
      return;
    }

    this.todo.push({ id: 4, title: this.f.title.value, is_completed: false, details: this.f.details.value, project_id: 1, course_id: 1, created_at: "2022-10-31T09:00:00Z", completed_at: "2022-10-31T09:00:00Z" });
    console.log(this.todo);
  }
}
