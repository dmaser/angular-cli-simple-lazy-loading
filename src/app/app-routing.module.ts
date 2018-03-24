import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';

const routes: Routes = [
  {
    path: 'route1',
    component: Route1Component
  },
  {
    path: 'route2',
    component: Route2Component
  },
  {
    path: 'route3',
    loadChildren: 'app/route3/route3.module#Route3Module'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
