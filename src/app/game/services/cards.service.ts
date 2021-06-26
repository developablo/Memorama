import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
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
  constructor() {}

  public dealHand(): Observable<Card[]> {
    return of(this.cards);
  }

  public checkRevealed(cards: Card[]): Boolean {
    return cards.every((card) => card.revealed === true);
  }
}
