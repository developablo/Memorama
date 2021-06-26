import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public revealed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public reveal():void {
    this.revealed = true
  }

}
