import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'owners',
    loadChildren: () =>
      import('@modules/owner/owner.module').then((m) => m.OwnerModule),
  },
  {
    path: 'pets',
    loadChildren: () =>
      import('@modules/pets/pets.module').then((m) => m.PetsModule),
  },
  { path: '', pathMatch: 'full', redirectTo: '/owners' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
