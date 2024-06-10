import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HightlightsDirective } from './highlights.directive';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MovieReviewsModule } from './reviews/movie-reviews.module';

import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';





@NgModule({
  declarations: [
    AppComponent,
    HightlightsDirective,
    LoginComponent,
    

    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  
    MovieReviewsModule, // Import ReactiveFormsModule
    HttpClientModule, // Add HttpClientModule to imports array
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
