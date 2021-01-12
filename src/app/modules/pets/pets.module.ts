import { NgModule } from '@angular/core';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetsFormComponent } from './pets-form/pets-form.component';
import { PetsViewComponent } from './pets-view/pets-view.component';
import { SharedModule } from '../shared/shared.module';
import { PetsRoutingModule } from './pets.router.module';

@NgModule({
  declarations: [PetsListComponent, PetsFormComponent, PetsViewComponent],
  imports: [SharedModule, PetsRoutingModule],
})
export class PetsModule {}
