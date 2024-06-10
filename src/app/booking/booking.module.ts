import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingRoutingModule } from './booking-routing.module';
import { HightlightsDirective } from './wordgightlight.directive';
import { BookingComponent } from './booking.component';

@NgModule({
  declarations: [
    HightlightsDirective,
    BookingComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
