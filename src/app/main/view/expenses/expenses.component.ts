import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExpensesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
