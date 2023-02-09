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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    FaqComponent,
    CtaComponent,
    HomeComponent,
    CaraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
