import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { GamesComponent } from './pages/games/games.component';
import { MyReservationsComponent } from './pages/my-reservations/my-reservations.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ReservationComponent } from './pages/reservation/reservation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'games', component: GamesComponent },
  { path: 'myreservations', component: MyReservationsComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'reservation', component: ReservationComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
