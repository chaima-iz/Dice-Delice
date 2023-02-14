import { Component,OnInit } from '@angular/core';
import { GameService } from 'src/app/services/gameService/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit{
  games:any;


  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGames();
  }
  getGames() {
    this.gameService.listGames().subscribe((games) => {
      this.games = games;
      // console.log(games);
    });
  }
}
