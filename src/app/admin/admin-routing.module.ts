import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'admin-details',
    loadChildren: () => import('./admin-details/admin-details.module').then( m => m.AdminDetailsPageModule)
  },
  {
    path: 'add-police',
    loadChildren: () => import('./add-police/add-police.module').then( m => m.AddPolicePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
