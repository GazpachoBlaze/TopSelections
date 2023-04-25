import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderpageComponent } from '../components/headerpage/headerpage.component';


const routes: Routes = [
    { path: "headerpage", component: HeaderpageComponent}
    
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []

})

export class AppRoutingModule {}



// import { HomepageComponent } from '../components/homepage/homepage.component';

// import { ActiongamespageComponent } from '../components/actiongamespage/actiongamespage.component';
// import { DrivinggamespageComponent } from '../components/drivinggamespage/drivinggamespage.component';
// import { FightinggamespageComponent } from '../components/fightinggamespage/fightinggamespage.component';
// import { MultiplayergamespageComponent } from '../components/multiplayergamespage/multiplayergamespage.component';

// import { Action1gameComponent } from '../components/actiongamespage/actiongamesList/action1game/action1game.component';
// import { Action2gameComponent } from '../components/actiongamespage/actiongamesList/action2game/action2game.component';
// import { Action3gameComponent } from '../components/actiongamespage/actiongamesList/action3game/action3game.component';
// import { Action4gameComponent } from '../components/actiongamespage/actiongamesList/action4game/action4game.component';
// import { Action5gameComponent } from '../components/actiongamespage/actiongamesList/action5game/action5game.component';

// import { Driving1gameComponent } from '../components/drivinggamespage/drivinggamesList/driving1game/driving1game.component';
// import { Driving2gameComponent } from '../components/drivinggamespage/drivinggamesList/driving2game/driving2game.component';
// import { Driving3gameComponent } from '../components/drivinggamespage/drivinggamesList/driving3game/driving3game.component';
// import { Driving4gameComponent } from '../components/drivinggamespage/drivinggamesList/driving4game/driving4game.component';
// import { Driving5gameComponent } from '../components/drivinggamespage/drivinggamesList/driving5game/driving5game.component';

// import { Fighting1gameComponent } from '../components/fightinggamespage/fightinggamesList/fighting1game/fighting1game.component';
// import { Fighting2gameComponent } from '../components/fightinggamespage/fightinggamesList/fighting2game/fighting2game.component';
// import { Fighting3gameComponent } from '../components/fightinggamespage/fightinggamesList/fighting3game/fighting3game.component';
// import { Fighting4gameComponent } from '../components/fightinggamespage/fightinggamesList/fighting4game/fighting4game.component';
// import { Fighting5gameComponent } from '../components/fightinggamespage/fightinggamesList/fighting5game/fighting5game.component';

// import { Multiplayer1gameComponent } from '../components/multiplayergamespage/multiplayergamesList/multiplayer1game/multiplayer1game.component';
// import { Multiplayer2gameComponent } from '../components/multiplayergamespage/multiplayergamesList/multiplayer2game/multiplayer2game.component';
// import { Multiplayer3gameComponent } from '../components/multiplayergamespage/multiplayergamesList/multiplayer3game/multiplayer3game.component';
// import { Multiplayer4gameComponent } from '../components/multiplayergamespage/multiplayergamesList/multiplayer4game/multiplayer4game.component';
// import { Multiplayer5gameComponent } from '../components/multiplayergamespage/multiplayergamesList/multiplayer5game/multiplayer5game.component';





    // { path: "home": component: HomeComponent },
    // { path: "about": component: AboutComponent },
    // { path: "contact": component: ContactComponent },



    // { path: "action-games", component: ActionGamesComponent },
    // { path: "driving-games", component: DrivingGamesComponent },
    // { path: "fighting-games", component: FightingGamesComponent },
    // { path: "multiplayer-games", component: MultiplayerGamesComponent },


    // { path: "actiongame1", component: ActionGame1Component },
    // { path: "actionGame2", component: ActionGame2Component },
    // { path: "actionGame3", component: ActionGame3Component },
    // { path: "actionGame4", component: ActionGame4Component },
    // { path: "actionGame5", component: ActionGame5Component },

    // { path: "drivingGame1", component: DrivingGame1Component },
    // { path: "drivingGame2", component: DrivingGame2Component },
    // { path: "drivingGame3", component: DrivingGame3Component },
    // { path: "drivingGame4", component: DrivingGame4Component },
    // { path: "drivingGame5", component: DrivingGame5Component },

    // { path: "fightingGame1", component: FightingGame1Component },
    // { path: "fightingGame2", component: FightingGame2Component },
    // { path: "fightingGame3", component: FightingGame3Component },
    // { path: "fightingGame4", component: FightingGame4Component },
    // { path: "fightingGame5", component: FightingGame5Component },

    // { path: "multiplayerGame1", component: MultiplayerGame1Component },
    // { path: "multiplayerGame2", component: MultiplayerGame2Component },
    // { path: "multiplayerGame3", component: MultiplayerGame3Component },
    // { path: "multiplayerGame4", component: MultiplayerGame4Component },
    // { path: "multiplayerGame5", component: MultiplayerGame5Component },





// export const routingComponents = [
//     HeaderpageComponent,
//     HomepageComponent,

//     ActiongamespageComponent,
//     DrivinggamespageComponent,
//     FightinggamespageComponent,
//     MultiplayergamespageComponent,

//     Action1gameComponent,
//     Action2gameComponent,
//     Action3gameComponent,
//     Action4gameComponent,
//     Action5gameComponent,

//     Driving1gameComponent,
//     Driving2gameComponent,
//     Driving3gameComponent,
//     Driving4gameComponent,
//     Driving5gameComponent,

//     Fighting1gameComponent,
//     Fighting2gameComponent,
//     Fighting3gameComponent,
//     Fighting4gameComponent,
//     Fighting5gameComponent,

//     Multiplayer1gameComponent,
//     Multiplayer2gameComponent,
//     Multiplayer3gameComponent,
//     Multiplayer4gameComponent,
//     Multiplayer5gameComponent,
// ]

