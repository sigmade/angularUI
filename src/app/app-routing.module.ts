import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TeamComponent} from './team/team.component';
import {PlayerComponent} from './player/player.component';
import {MatchComponent} from './match/match.component';

const routes: Routes = [
{path:'team',component:TeamComponent},
{path:'player',component:PlayerComponent},
{path:'match',component:MatchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
