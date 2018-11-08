import {Card} from './card';

export class Deck {
  success: string;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
  cards: Card[];
}
