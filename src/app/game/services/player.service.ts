import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private player1: Player = {id:1, score: 0};
  private player2: Player = {id:2, score: 0}
  public currentPlayer: BehaviorSubject<Player> = new BehaviorSubject(this.player1);

  constructor() { }

  public togglePlayer() {
    this.currentPlayer.next(this.currentPlayer.value === this.player1? this.player2: this.player1);
  }

  public resetScores() {
    this.player1.score = 0;
    this.player2.score = 0;
    this.currentPlayer.next(this.player1);
  }
}
