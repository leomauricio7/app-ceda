import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VouchesPage } from './vouches.page';

const routes: Routes = [
  {
    path: '',
    component: VouchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VouchesPageRoutingModule {}
