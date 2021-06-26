import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public cards: string[] = ['A','B','C','D','E','F','G','H','I','J','A','B','C','D','E','F','G','H','I','J']
  constructor() { }

  ngOnInit(): void {
  }

}
