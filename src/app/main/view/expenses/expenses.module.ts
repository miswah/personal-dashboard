import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExpensesComponent } from "./expenses.component";
import { RouterModule, Routes } from "@angular/router";
import { IncomeListComponent } from "./income-list/income-list.component";
import { ExpenseListComponent } from "./expense-list/expense-list.component";
import { environment } from "environments/environment";

//Routes
const routes: Routes = [{ path: "", component: ExpensesComponent, title: "Expense - " + environment.title, data: { animation: "expense" } }];

@NgModule({
  declarations: [ExpensesComponent, IncomeListComponent, ExpenseListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ExpensesModule {}
