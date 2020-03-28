import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'home', loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)},
      {
        path: 'agendamentos',
        loadChildren: () => import('../agendamentos/agendamentos.module').then( m => m.AgendamentosPageModule)
      },
      {
        path: 'cartao-virtual',
        loadChildren: () => import('../cartao-virtual/cartao-virtual.module').then( m => m.CartaoVirtualPageModule)
      },
      {
        path: 'vouches',
        loadChildren: () => import('../vouches/vouches.module').then( m => m.VouchesPageModule)
      },
      {
        path: 'financeiro',
        loadChildren: () => import('../financeiro/financeiro.module').then( m => m.FinanceiroPageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
