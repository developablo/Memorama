import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  private availableCards: Card[] = [
    {
      id: 1,
      revealed: false,
      imageUrl: 'assets/images/arrow.svg',
      cardName: 'Flecha',
    },
    {
      id: 2,
      revealed: false,
      imageUrl: 'assets/images/brush.svg',
      cardName: 'Pincel',
    },
    {
      id: 3,
      revealed: false,
      imageUrl: 'assets/images/camera.svg',
      cardName: 'Cámara',
    },
    {
      id: 4,
      revealed: false,
      imageUrl: 'assets/images/fish.svg',
      cardName: 'Pez',
    },
    {
      id: 5,
      revealed: false,
      imageUrl: 'assets/images/laptop.svg',
      cardName: 'Laptop',
    },
    {
      id: 6,
      revealed: false,
      imageUrl: 'assets/images/lightbulb.svg',
      cardName: 'Lámpara',
    },
    {
      id: 7,
      revealed: false,
      imageUrl: 'assets/images/mortarboard-hat.svg',
      cardName: 'Bonete',
    },
    {
      id: 8,
      revealed: false,
      imageUrl: 'assets/images/owl.svg',
      cardName: 'Buho',
    },
    {
      id: 9,
      revealed: false,
      imageUrl: 'assets/images/popsicles.svg',
      cardName: 'Helados',
    },
    {
      id: 10,
      revealed: false,
      imageUrl: 'assets/images/flower.svg',
      cardName: 'Flor',
    },
  ];
  public cards: Card[] = [
    { ...this.availableCards[0] },
    { ...this.availableCards[1] },
    { ...this.availableCards[2] },
    { ...this.availableCards[3] },
    { ...this.availableCards[4] },
    { ...this.availableCards[5] },
    { ...this.availableCards[6] },
    { ...this.availableCards[7] },
    { ...this.availableCards[8] },
    { ...this.availableCards[9] },
    { ...this.availableCards[0] },
    { ...this.availableCards[1] },
    { ...this.availableCards[2] },
    { ...this.availableCards[3] },
    { ...this.availableCards[4] },
    { ...this.availableCards[5] },
    { ...this.availableCards[6] },
    { ...this.availableCards[7] },
    { ...this.availableCards[8] },
    { ...this.availableCards[9] },
  ];

  public currentPlayer: Player;
  public scores: { id: number; score: number }[] = [
    { id: 1, score: 0 },
    { id: 2, score: 0 },
  ];
  private previouslySelected: number;
  constructor(private playerService: PlayerService) {}

  public ngOnInit(): void {
    this.playerService.currentPlayer.subscribe(
      (res) => (this.currentPlayer = res)
    );
  }

  public checkMatch(cardId: number): void {
    if (!this.previouslySelected) {
      this.previouslySelected = cardId;
    } else {
      this.endTurn(this.previouslySelected === cardId);
      this.previouslySelected = null;
    }
  }

  private endTurn(success: boolean) {
    if (success) {
      this.currentPlayer.score += 1;
      this.scores.find(player=>player.id === this.currentPlayer.id).score += 1;
    } else {
      this.playerService.togglePlayer();
    }
  }
}
