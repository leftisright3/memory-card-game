import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../objects/card';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})

export class CardDetailComponent implements OnInit {
  @Input() cards: Card[];

  firstSelectedCard: Card;
  secondSelectedCard: Card;
  amountSelected = 0;

  constructor() { }

  ngOnInit() {
  }

  executeGameRules(card: Card): void {
    if (this.amountSelected === 0) {
      this.amountSelected++;
      card['flipped'] = true;
      this.firstSelectedCard = card;
    } else if (this.amountSelected === 1) {
      this.amountSelected++;
      card['flipped'] = true;
      this.secondSelectedCard = card;
    }

    let execute = true;
    setTimeout(() => {
      if (this.amountSelected === 2) {
        if (this.firstSelectedCard.value !== this.secondSelectedCard.value) {
          this.firstSelectedCard['flipped'] = false;
          this.secondSelectedCard['flipped'] = false;
        }
        this.amountSelected = 0;
      }
      execute = false;
    }, 2200);
  }
}
