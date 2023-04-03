import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-income-list",
  templateUrl: "./income-list.component.html",
  styleUrls: ["./income-list.component.scss"],
})
export class IncomeListComponent implements OnInit {
  public incomes = [
    {
      date: "2022-10-31T09:00:00Z",
      data: [
        { title: "Eggs", tag: "Food Order", amount: 600, details: "During accident" },
        { title: "Eggs", tag: "Lunch", amount: 800, details: "During accident" },
      ],
    },
    { date: "2022-10-30T09:00:00Z", data: [{ title: "Eggs", tag: "Food Order", amount: 500, details: "During accident" }] },
  ];
  public incomeForm: UntypedFormGroup;
  constructor(private modalService: NgbModal, private _formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.incomeForm = this._formBuilder.group({
      date: ["", Validators.required],
      title: ["", Validators.required],
      details: ["", Validators.required],
      tag: ["", Validators.required],
      amount: [0, Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.incomeForm.controls;
  }

  onSubmit() {
    console.log(this.incomeForm.value);
    console.log(this.f.title.value);

    // stop here if form is invalid
    if (this.incomeForm.invalid) {
      return;
    }

    console.log(this.incomeForm.value);
  }

  // modal Open Vertically Centered
  modalOpenVC(modalVC) {
    this.modalService.open(modalVC, {
      centered: true,
    });
  }
}
