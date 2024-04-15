import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderpageComponent } from '../components/headerpage/headerpage.component';
import { HomepageComponent } from '../components/homepage/homepage.component';

import { ActiongamespageComponent } from '../components/actiongamespage/actiongamespage.component';
import { DrivinggamespageComponent } from '../components/drivinggamespage/drivinggamespage.component';
import { FightinggamespageComponent } from '../components/fightinggamespage/fightinggamespage.component';
import { MultiplayergamespageComponent } from '../components/multiplayergamespage/multiplayergamespage.component';


import { Action1gameComponent } from '../components/actiongamespage/actiongamesList/action1game/action1game.component';
import { Action2gameComponent } from '../components/actiongamespage/actiongamesList/action2game/action2game.component';
import { Action3gameComponent } from '../components/actiongamespage/actiongamesList/action3game/action3game.component';
import { Action4gameComponent } from '../components/actiongamespage/actiongamesList/action4game/action4game.component';
import { Action5gameComponent } from '../components/actiongamespage/actiongamesList/action5game/action5game.component';


import { Driving1gameComponent } from '../components/drivinggamespage/drivinggamesList/driving1game/driving1game.component';
import { Driving2gameComponent } from '../components/drivinggamespage/drivinggamesList/driving2game/driving2game.component';
import { Driving3gameComponent } from '../components/drivinggamespage/drivinggamesList/driving3game/driving3game.component';
import { Driving4gameComponent } from '../components/drivinggamespage/drivinggamesList/driving4game/driving4game.component';
import { Driving5gameComponent } from '../components/drivinggamespage/drivinggamesList/driving5game/driving5game.component';


import { Fighting1gameComponent } from '../components/fightinggamespage/fightinggamesList/fighting1game/fighting1game.component';
import { Fighting2gameComponent } from '../components/fightinggamespage/fightinggamesList/fighting2game/fighting2game.component';
import { Fighting3gameComponent } from '../components/fightinggamespage/fightinggamesList/fighting3game/fighting3game.component';
import { Fighting4gameComponent } from '../components/fightinggamespage/fightinggamesList/fighting4game/fighting4game.component';
import { Fighting5gameComponent } from '../components/fightinggamespage/fightinggamesList/fighting5game/fighting5game.component';


import { Multiplayer1gameComponent } from '../components/multiplayergamespage/multiplayergamesList/multiplayer1game/multiplayer1game.component';
import { Multiplayer2gameComponent } from '../components/multiplayergamespage/multiplayergamesList/multiplayer2game/multiplayer2game.component';
import { Multiplayer3gameComponent } from '../components/multiplayergamespage/multiplayergamesList/multiplayer3game/multiplayer3game.component';
import { Multiplayer4gameComponent } from '../components/multiplayergamespage/multiplayergamesList/multiplayer4game/multiplayer4game.component';
import { Multiplayer5gameComponent } from '../components/multiplayergamespage/multiplayergamesList/multiplayer5game/multiplayer5game.component';


const routes: Routes = [
    { path: "headerpage", component: HeaderpageComponent},
    { path: "", component: HomepageComponent},
    { path: "homepage", component: HomepageComponent},


    { path: "actiongames", component: ActiongamespageComponent },
    { path: "drivinggames", component: DrivinggamespageComponent },
    { path: "fightinggames", component: FightinggamespageComponent },
    { path: "multiplayergames", component: MultiplayergamespageComponent },


    { path: "starwars", component: Action1gameComponent },
    { path: "fortnite", component: Action2gameComponent },
    { path: "apexlegends", component: Action3gameComponent },
    { path: "valorant", component: Action4gameComponent },
    { path: "rocketleague", component: Action5gameComponent },


    { path: "driving1game", component: Driving1gameComponent },
    { path: "driving2game", component: Driving2gameComponent },
    { path: "driving3game", component: Driving3gameComponent },
    { path: "driving4game", component: Driving4gameComponent },
    { path: "driving5game", component: Driving5gameComponent },


    { path: "fighting1game", component: Fighting1gameComponent },
    { path: "fighting2game", component: Fighting2gameComponent },
    { path: "fighting3game", component: Fighting3gameComponent },
    { path: "fighting4game", component: Fighting4gameComponent },
    { path: "fighting5game", component: Fighting5gameComponent },


    { path: "multiplayer1game", component: Multiplayer1gameComponent },
    { path: "multiplayer2game", component: Multiplayer2gameComponent },
    { path: "multiplayer3game", component: Multiplayer3gameComponent },
    { path: "multiplayer4game", component: Multiplayer4gameComponent },
    { path: "multiplayer5game", component: Multiplayer5gameComponent },
    
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []

})

export class AppRoutingModule { }

export const routingComponents = [
    HeaderpageComponent,
    HomepageComponent,

    ActiongamespageComponent,
    DrivinggamespageComponent,
    FightinggamespageComponent,
    MultiplayergamespageComponent,

    Action1gameComponent,
    Action2gameComponent,
    Action3gameComponent,
    Action4gameComponent,
    Action5gameComponent,

    Driving1gameComponent,
    Driving2gameComponent,
    Driving3gameComponent,
    Driving4gameComponent,
    Driving5gameComponent,

    Fighting1gameComponent,
    Fighting2gameComponent,
    Fighting3gameComponent,
    Fighting4gameComponent,
    Fighting5gameComponent,

    Multiplayer1gameComponent,
    Multiplayer2gameComponent,
    Multiplayer3gameComponent,
    Multiplayer4gameComponent,
    Multiplayer5gameComponent,

]
