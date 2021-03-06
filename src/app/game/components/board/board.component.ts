import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';
import { Player } from '../../models/player.model';
import { CardsService } from '../../services/cards.service';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  public currentPlayer: Player;
  public scores: { id: number; score: number }[] = [
    { id: 1, score: 0 },
    { id: 2, score: 0 },
  ];
  private previouslySelected: number;
  public gameResult: string = null;
  public cards: Card[] = [];
  public timeLeft: number = 10;
  public disabled = false;
  constructor(
    private playerService: PlayerService,
    private cardsService: CardsService
  ) {}

  public ngOnInit(): void {
    this.playerService.currentPlayer.subscribe(
      (res) => (this.currentPlayer = res)
    );
    this.cardsService.dealHand().subscribe((res) => (this.cards = res));
    setInterval(() => this.timeControl(), 1000);
  }

  public checkMatch(cardId: number): void {
    this.disabled = true;
    if (!this.previouslySelected) {
      this.previouslySelected = cardId;
      this.disabled = false;
    } else {
      const success = this.previouslySelected === cardId;
      setTimeout(() => {
        if (!success) {
          this.cards
            .filter(
              (card) =>
                card.id === cardId || card.id === this.previouslySelected
            )
            .forEach((card) => (card.revealed = false));
        }
        this.endTurn(success);
        this.previouslySelected = null;
        this.disabled = false;
      }, 1000);
    }
  }

  private endTurn(success: boolean) {
    if (success) {
      this.currentPlayer.score += 1;
      this.scores.find(
        (player) => player.id === this.currentPlayer.id
      ).score += 1;
    } else {
      this.playerService.togglePlayer();
    }
    this.timeLeft = 10;
    if (this.cardsService.checkRevealed(this.cards)) this.endGame();
  }

  public reset(): void {
    this.scores.forEach((player) => (player.score = 0));
    this.playerService.resetScores();
    this.cards.forEach((card) => (card.revealed = false));
    this.gameResult = null;
  }

  private endGame(): void {
    if (this.scores[0].score === this.scores[1].score) {
      this.gameResult = 'Es un empate!';
    } else {
      this.gameResult =
        this.scores[0].score > this.scores[1].score
          ? `Ha ganado el Jugador 1 con ${this.scores[0].score} puntos!`
          : `Ha ganado el Jugador 2 con ${this.scores[1].score} puntos!`;
    }
    this.timeLeft = 0;
  }

  private timeControl() {
    if (this.timeLeft <= 0) {
      this.endTurn(false);
    } else {
      this.timeLeft -= 1;
    }
  }
}
