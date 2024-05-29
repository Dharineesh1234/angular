import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HightlightsDirective } from './highlights.directive';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HightlightsDirective,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
