import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // Uncomment this import
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent, // Add AppComponent to declarations
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Change bootstrap to AppComponent
})
export class AppModule { }
