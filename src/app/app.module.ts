import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { WhoAmIComponent } from './pages/landing/who-am-i/who-am-i.component';
import { RoadmapComponent } from './pages/landing/roadmap/roadmap.component';
import { ContactComponent } from './pages/landing/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TaulerComponent } from './components/memory/tauler/tauler.component';
import { CasellaComponent } from './components/memory/casella/casella.component';
import { MemoryComponent } from './pages/memory/memory.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    WhoAmIComponent,
    RoadmapComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    TaulerComponent,
    CasellaComponent,
    MemoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
