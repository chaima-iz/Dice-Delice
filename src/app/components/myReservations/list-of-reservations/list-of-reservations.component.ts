import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-list-of-reservations',
  templateUrl: './list-of-reservations.component.html',
  styleUrls: ['./list-of-reservations.component.css']
})
export class ListOfReservationsComponent {
  @Input() reservations!:any[];
  p: number = 1;

}
