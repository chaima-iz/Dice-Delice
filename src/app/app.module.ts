import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { FaqComponent } from './components/home/faq/faq.component';
import { CtaComponent } from './components/home/cta/cta.component';
import { HomeComponent } from './pages/home/home.component';
import { CaraComponent } from './components/home/cara/cara.component';
import { FormComponent } from './components/login/form/form.component';
import { UnderFormComponent } from './components/login/under-form/under-form.component';
import { LoginComponent } from './pages/login/login.component';
import { Cta2Component } from './components/home/cta2/cta2.component';
import { TestimonialsComponent } from './components/home/testimonials/testimonials.component';
import { PicLoginComponent } from './components/login/pic-login/pic-login.component';
<<<<<<< HEAD
import { GamesComponent } from './pages/games/games.component';
import { SearchbarComponent } from './components/Games/searchbar/searchbar.component';
import { ListOfGamesComponent } from './components/Games/list-of-games/list-of-games.component';
import { MyReservationsComponent } from './pages/my-reservations/my-reservations.component';
import { ListOfReservationsComponent } from './components/myReservations/list-of-reservations/list-of-reservations.component';
import { SearchBarComponent } from './components/myReservations/search-bar/search-bar.component';
=======
import { RegistrationFormComponent } from './components/signUp/registration-form/registration-form.component';
import { LeftDescriptionComponent } from './components/signUp/left-description/left-description.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
>>>>>>> 06a0c6460057f59055c9fc41f55601ab3c35c58a

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    FaqComponent,
    CtaComponent,
    HomeComponent,
    CaraComponent,
    FormComponent,
    UnderFormComponent,
    LoginComponent,
    Cta2Component,
    TestimonialsComponent,
    PicLoginComponent,
<<<<<<< HEAD
    GamesComponent,
    SearchbarComponent,
    ListOfGamesComponent,
    MyReservationsComponent,
    ListOfReservationsComponent,
    SearchBarComponent,
=======
    RegistrationFormComponent,
    LeftDescriptionComponent,
    SignUpComponent,
>>>>>>> 06a0c6460057f59055c9fc41f55601ab3c35c58a
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
