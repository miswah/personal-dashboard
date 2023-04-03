import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KanbanComponent } from "./kanban.component";
import { RouterModule, Routes } from "@angular/router";
import { BoardComponent } from "./board/board.component";
import { TabsComponent } from "./tabs/tabs.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CoreCommonModule } from "@core/common.module";

//Routes
const routes: Routes = [{ path: "", component: KanbanComponent }];

@NgModule({
  declarations: [KanbanComponent, BoardComponent, TabsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgbModule, CoreCommonModule],
})
export class KanbanModule {}
