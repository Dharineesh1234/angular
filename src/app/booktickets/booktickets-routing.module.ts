import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookticketsComponent } from './booktickets.component';

const routes: Routes = [
  { path: '', component: BookticketsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookticketsRoutingModule { }
