import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HightlightsDirective } from './highlights.directive';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HightlightsDirective,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule // Import ReactiveFormsModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
