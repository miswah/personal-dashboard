import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoComponent } from "./todo.component";
import { CardComponent } from "./card/card.component";
import { CreateComponent } from "./create/create.component";
import { environment } from "environments/environment";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";

// rputing
const routes: Routes = [{ path: "", component: TodoComponent, title: "Todo - " + environment.title, data: { animation: "todo" } }];

@NgModule({
  declarations: [TodoComponent, CardComponent, CreateComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgbModule, ReactiveFormsModule],
})
export class TodoModule {}
