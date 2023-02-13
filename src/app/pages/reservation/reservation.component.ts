import { Component } from '@angular/core';

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
  
  addReservation() {
    console.log(this.reservation_date,this.start_time,this.end_time,this.game
      ,this.payement,this.instructions);
  }
}
