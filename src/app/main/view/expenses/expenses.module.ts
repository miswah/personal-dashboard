import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExpensesComponent } from "./expenses.component";
import { RouterModule, Routes } from "@angular/router";
import { IncomeListComponent } from "./income-list/income-list.component";
import { ExpenseListComponent } from "./expense-list/expense-list.component";
import { environment } from "environments/environment";
import { CardComponent } from "./card/card.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";

//Routes
const routes: Routes = [{ path: "", component: ExpensesComponent, title: "Expense - " + environment.title, data: { animation: "expense" } }];

@NgModule({
  declarations: [ExpensesComponent, IncomeListComponent, ExpenseListComponent, CardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgbModule, ReactiveFormsModule],
})
export class ExpensesModule {}
