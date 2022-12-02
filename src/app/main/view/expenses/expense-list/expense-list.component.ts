import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-expense-list",
  templateUrl: "./expense-list.component.html",
  styleUrls: ["./expense-list.component.scss"],
})
export class ExpenseListComponent implements OnInit {
  public expenses = [
    { date: "2022-10-30T09:00:00Z", data: [{ title: "Eggs", tag: "Food Order", amount: 500, details: "During accident" }] },
    {
      date: "2022-10-31T09:00:00Z",
      data: [
        { title: "Eggs", tag: "Food Order", amount: 600, details: "During accident" },
        { title: "Eggs", tag: "Lunch", amount: 800, details: "During accident" },
      ],
    },
  ];

  public expenseForm: UntypedFormGroup;

  public basicDPdata: NgbDateStruct;

  private today = new Date(Date.now());

  constructor(private modalService: NgbModal, private _formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.expenseForm = this._formBuilder.group({
      date: [{ year: this.today.getFullYear(), month: this.today.getMonth(), day: this.today.getUTCDate() }, Validators.required],
      title: ["", Validators.required],
      details: ["", Validators.required],
      tag: ["", Validators.required],
      amount: [0, Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.expenseForm.controls;
  }

  onSubmit() {
    console.log(this.expenseForm.value);
    console.log(this.f.title.value);

    // stop here if form is invalid
    if (this.expenseForm.invalid) {
      return;
    }

    console.log(this.expenseForm.value);
  }

  // modal Open Vertically Centered
  modalOpenVC(modalVC) {
    this.modalService.open(modalVC, {
      centered: true,
    });
  }
}
