import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddreviewComponent } from './addreview.component';

const routes: Routes = [
  { path: '', component: AddreviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddreviewRoutingModule { }
