import { NgModule } from '@angular/core';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetsFormComponent } from './pets-form/pets-form.component';
import { PetsViewComponent } from './pets-view/pets-view.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PetsListComponent },
  { path: 'new', component: PetsFormComponent },
  { path: 'edit/:id', component: PetsFormComponent },
  { path: 'view/:id', component: PetsViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }
