import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/lista',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'lista',
        children: [
          {
            path: '',
            loadChildren: () => import('./page/lista/lista.module').then(m => m.ListaPageModule)
          }
        ]
      },
      {
        path: 'agenda',
        children: [
          {
            path: '',
            loadChildren: () => import('./page/agenda/agenda.module').then(m => m.AgendaPageModule)
          }
        ]
      },
      {
        path: 'productos',
        children: [
          {
            path: '',
            loadChildren: () => import('./page/productos/productos.module').then(m => m.ProductosPageModule)
          },

        ],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
