import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { Routes, RouterModule } from "@angular/router";
import { ProjectModule } from "../project/project.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

//Routing
const routes: Routes = [{ path: "", component: DashboardComponent }];

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ProjectModule, NgbModule],
})
export class DashboardModule {}
