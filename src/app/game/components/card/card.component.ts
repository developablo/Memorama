import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Input() disabled: Boolean = false;
  @Output() selected: EventEmitter<Number> = new EventEmitter<Number>();

  constructor() {}

  ngOnInit(): void {}

  public reveal(): void {
    if (!this.disabled) {
      this.card.revealed = true;
      this.selected.emit(this.card.id);
    }
  }
}
