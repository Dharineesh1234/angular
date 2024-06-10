import { Component } from '@angular/core';
import { BookticketsService } from '../booktickets.service';
import { NgForm } from '@angular/forms';
export interface TicketBookInterface
{
  BookingId:number,
  UserId:string,
  NumberOfStickers:number
}

@Component({
  selector: 'app-booktickets',
  templateUrl: './booktickets.component.html',
  styleUrls: ['./booktickets.component.css']
})
export class BookticketsComponent {
  ticketBookInterface:TicketBookInterface={
    BookingId:0,
    UserId:"",
    NumberOfStickers:0
  };
  showSuccessModal: boolean = false; // Variable to control the visibility of the success modal

  constructor(private movieService: BookticketsService) { }

  onSubmit(BookForm: NgForm): void {
    if (BookForm.valid) {
      this.movieService.book(this.ticketBookInterface).subscribe(
        response => {
          console.log('Booking added successfully:', response);
          this.showSuccessModal = true; // Show modal on successful booking
        },
        error => {
          console.error('Failed to add booking:', error);
        }
      );
    }
  }

  // Method to close the success modal
  closeSuccessModal(): void {
    this.showSuccessModal = false;
  }
}
