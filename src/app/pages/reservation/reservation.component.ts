import { Component, OnInit} from '@angular/core';
import { DataService } from '../../services/data.service';
import { GameService } from 'src/app/services/gameService/game.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{
  reservation_date:any;
  start_time:any;
  end_time:any;
  payement:any;
  instructions:any;
  id_user:any;
  id_game:any;

  games : any;
  user : any;
  
  today: string = new Date().toISOString().substring(0, 10);

  ngOnInit(): void {
    this.gameService.listGames().subscribe(
      res=>{
        // console.log(res);
        this.games = res;
      }
    );
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    this.id_user = this.user.id;
    // console.log(this.user)
  }
  constructor(private dataService: DataService , private gameService : GameService,private router:Router) {}
  
  
  addReservation() {
    const reservationData = {
      reservation_date: this.reservation_date,
      start_time: this.start_time,
      end_time: this.end_time,
      id_game: this.id_game,
      id_user: this.id_user,
      payement: this.payement,
      instructions: this.instructions,
    };
    // console.log(reservationData);console.log(reservationData);
    this.dataService.addReservation(reservationData)
      .subscribe(
        data => {
          // window.location.reload();
          this.router.navigate(['/myreservations']);

        },
        error => {
          console.log(error);
        }
      );
  }

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
}
