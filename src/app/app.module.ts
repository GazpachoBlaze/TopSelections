import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ActiongamesComponent } from './components/actiongames/actiongames.component';
import { ActionGamesComponent } from './components/action-games/action-games.component';
import { DrivingGamesComponent } from './components/driving-games/driving-games.component';
import { FightingGamesComponent } from './components/fighting-games/fighting-games.component';
import { MultiplayerGamesComponent } from './components/multiplayer-games/multiplayer-games.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { ActionGame1Component } from './components/action-games/actionList/action-game1/action-game1.component';
import { ActionGame2Component } from './components/action-games/actionList/action-game2/action-game2.component';
import { ActionGame3Component } from './components/action-games/actionList/action-game3/action-game3.component';
import { ActionGame4Component } from './components/action-games/actionList/action-game4/action-game4.component';
import { ActionGame5Component } from './components/action-games/actionList/action-game5/action-game5.component';
import { DrivingGame1Component } from './components/driving-games/drivingList/driving-game1/driving-game1.component';
import { DrivingGame2Component } from './components/driving-games/drivingList/driving-game2/driving-game2.component';
import { DrivingGame3Component } from './components/driving-games/drivingList/driving-game3/driving-game3.component';
import { DrivingGame4Component } from './components/driving-games/drivingList/driving-game4/driving-game4.component';
import { DrivingGame5Component } from './components/driving-games/drivingList/driving-game5/driving-game5.component';
import { FightingGame1Component } from './components/fighting-games/fightingList/fighting-game1/fighting-game1.component';
import { FightingGame2Component } from './components/fighting-games/fightingList/fighting-game2/fighting-game2.component';
import { FightingGame3Component } from './components/fighting-games/fightingList/fighting-game3/fighting-game3.component';
import { FightingGame4Component } from './components/fighting-games/fightingList/fighting-game4/fighting-game4.component';
import { FightingGame5Component } from './components/fighting-games/fightingList/fighting-game5/fighting-game5.component';
import { MultiplayerGame1Component } from './components/multiplayer-games/multiplayerList/multiplayer-game1/multiplayer-game1.component';
import { MultiplayerGame2Component } from './components/multiplayer-games/multiplayerList/multiplayer-game2/multiplayer-game2.component';
import { MultiplayerGame3Component } from './components/multiplayer-games/multiplayerList/multiplayer-game3/multiplayer-game3.component';
import { MultiplayerGame4Component } from './components/multiplayer-games/multiplayerList/multiplayer-game4/multiplayer-game4.component';
import { MultiplayerGame5Component } from './components/multiplayer-games/multiplayerList/multiplayer-game5/multiplayer-game5.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ActiongamesComponent,
    ActionGamesComponent,
    DrivingGamesComponent,
    FightingGamesComponent,
    MultiplayerGamesComponent,
    ContactComponent,
    HeaderComponent,
    ActionGame1Component,
    ActionGame2Component,
    ActionGame3Component,
    ActionGame4Component,
    ActionGame5Component,
    DrivingGame1Component,
    DrivingGame2Component,
    DrivingGame3Component,
    DrivingGame4Component,
    DrivingGame5Component,
    FightingGame1Component,
    FightingGame2Component,
    FightingGame3Component,
    FightingGame4Component,
    FightingGame5Component,
    MultiplayerGame1Component,
    MultiplayerGame2Component,
    MultiplayerGame3Component,
    MultiplayerGame4Component,
    MultiplayerGame5Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
