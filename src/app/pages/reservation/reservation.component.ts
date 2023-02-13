import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservation_date:any;
  start_time:any;
  end_time:any;
  game:any;
  payement:any;
  instructions:any;
  
  constructor(private dataService: DataService) {}
  
  addReservation() {
    const reservationData = {
      reservation_date: this.reservation_date,
      start_time: this.start_time,
      end_time: this.end_time,
      game: this.game,
      payement: this.payement,
      instructions: this.instructions
    };
    
    this.dataService.addReservation(reservationData)
      .subscribe(
        data => {
          console.log('it works');
        },
        error => {
          console.log('this doesnt work');
        }
      );
  }
}
