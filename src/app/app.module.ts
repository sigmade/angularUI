import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { ShowTeamComponent } from './team/show-team/show-team.component';
import { PlayerComponent } from './player/player.component';
import { ShowPlayerComponent } from './player/show-player/show-player.component';
import { MatchComponent } from './match/match.component';
import { ShowMatchComponent } from './match/show-match/show-match.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AddEditMatchComponent } from './match/add-edit-match/add-edit-match.component';
import { AddEditPlayerComponent } from './player/add-edit-player/add-edit-player.component';
import { AddEditTeamComponent } from './team/add-edit-team/add-edit-team.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    ShowTeamComponent,
    PlayerComponent,
    ShowPlayerComponent,
    MatchComponent,
    ShowMatchComponent,
    AddEditMatchComponent,
    AddEditPlayerComponent,
    AddEditTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
