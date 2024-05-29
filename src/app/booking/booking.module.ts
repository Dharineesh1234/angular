import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingRoutingModule } from './booking-routing.module';
import { HightlightsDirective } from './wordgightlight.directive';



@NgModule({
  declarations: [
    HightlightsDirective
  ],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
