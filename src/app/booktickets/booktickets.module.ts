import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookticketsRoutingModule } from './booktickets-routing.module';
import { BookticketsComponent } from './booktickets.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookticketsComponent],
  imports: [
    CommonModule,
    BookticketsRoutingModule,
    FormsModule
  ]
})
export class BookticketsModule { }
