import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'WELCOME TO THE NETFLIX TICKET BOOKING APP';
  imageUrl = '/assets/Images/netflix.png';
  imageUrl1 = '/assets/Images/banner.jpg';
  bulbOn = false; 
  toggleBulb() {
    this.bulbOn = !this.bulbOn;
    
  }
  get bulbImage() {
    return this.bulbOn ? '/assets/Images/bulbon.jpg' : '/assets/Images/bulboff.jpg';
  }
}
