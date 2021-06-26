import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { GameRoutingRoutingModule } from './game-routing.module';
import { CardComponent } from './components/card/card.component';
import { PlayerService } from './services/player.service';



@NgModule({
  declarations: [BoardComponent, CardComponent],
  imports: [
    CommonModule,
    GameRoutingRoutingModule
  ],
  exports:[BoardComponent],
  providers:[PlayerService]
})
export class GameModule { }
