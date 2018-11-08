import { Component, OnInit } from '@angular/core';
import { CARDS } from '../objects/mock-cards';
import {CardsService} from '../cards.service';
import {Card} from '../objects/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

  cards = CARDS;
  loading = false;

  constructor(private cardsService: CardsService) {
  }

  ngOnInit() {
    this.resetCards();
  }

  resetCards(): void {
    this.cards.forEach(card => {
      card['selected'] = false;
      card['flipped'] = false;
    });
  }

  shuffle(): void {
    this.loading = true;
    this.resetCards();
    let currentIndex = this.cards.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
    setTimeout(() => { this.loading = false; }, 1200);
  }
}

