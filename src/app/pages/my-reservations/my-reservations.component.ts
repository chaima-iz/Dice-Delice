import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent {
  reservations:any;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations() {
    this.dataService.listReservations().subscribe((reservations) => {
      this.reservations = reservations;
      console.log(reservations);
    });
  }
}
