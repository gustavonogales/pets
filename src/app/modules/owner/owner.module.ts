import { NgModule } from "@angular/core";
import { OwnerListComponent } from "./owner-list/owner-list.component";
import { OwnerRoutingModule } from "./owner-routing.module";
import { SharedModule } from "../shared/shared.module";
import { OwnerFormComponent } from "./owner-form/owner-form.component";
import { OwnerViewComponent } from "./owner-view/owner-view.component";
import { OwnerDynamicFormComponent } from "./owner-dynamic-form/owner-dynamic-form.component";

@NgModule({
  declarations: [
    OwnerListComponent,
    OwnerFormComponent,
    OwnerViewComponent,
    OwnerDynamicFormComponent,
  ],
  imports: [OwnerRoutingModule, SharedModule],
})
export class OwnerModule {}
