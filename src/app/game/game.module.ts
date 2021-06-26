import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { GameRoutingRoutingModule } from './game-routing.module';



@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    GameRoutingRoutingModule
  ],
  exports:[BoardComponent]
})
export class GameModule { }
