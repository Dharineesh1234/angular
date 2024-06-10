import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayingComponent } from './playing.component';
import { PlayingRoutingModule } from './playing-routing.module';

@NgModule({
  declarations: [PlayingComponent],
  imports: [
    CommonModule,
    PlayingRoutingModule
  ]
})
export class PlayingModule { }
