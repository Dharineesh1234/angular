import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddreviewComponent } from './addreview.component';
import { AddreviewRoutingModule } from './addreview-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddreviewComponent],
  imports: [
    CommonModule,
    AddreviewRoutingModule,
    FormsModule
  ]
})
export class AddreviewModule { }
