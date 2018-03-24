import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route3Component } from './route3.component';
import { RouterModule } from '@angular/router';
import { route3routes } from './route3.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route3routes)
  ],
  declarations: [Route3Component]
})
export class Route3Module { }
