import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OwnerListComponent } from "./owner-list/owner-list.component";
import { OwnerFormComponent } from "./owner-form/owner-form.component";
import { OwnerViewComponent } from "./owner-view/owner-view.component";
import { OwnerDynamicFormComponent } from "./owner-dynamic-form/owner-dynamic-form.component";

const routes: Routes = [
  { path: "", component: OwnerListComponent },
  { path: "new", component: OwnerFormComponent },
  { path: "new-dynamic", component: OwnerDynamicFormComponent },
  { path: "edit-dynamic/:id", component: OwnerDynamicFormComponent },
  { path: "edit/:id", component: OwnerDynamicFormComponent },
  { path: "view/:id", component: OwnerViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerRoutingModule {}
