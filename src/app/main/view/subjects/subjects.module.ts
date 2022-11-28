import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SubjectsComponent } from "./subjects.component";
import { ListComponent } from "./list/list.component";
import { ViewComponent } from "./view/view.component";
import { RouterModule, Routes } from "@angular/router";
import { environment } from "environments/environment";

//Routing
const routes: Routes = [
  { path: "", component: ListComponent, title: "Subjects - " + environment.title, data: { animation: "subject" } },
  { path: "view/:id", component: ViewComponent, title: "Subjects - " + environment.title, data: { animation: "view" } },
];

@NgModule({
  declarations: [SubjectsComponent, ListComponent, ViewComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SubjectsModule {}
