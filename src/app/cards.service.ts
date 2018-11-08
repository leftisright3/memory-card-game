import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Deck} from './objects/deck';
import {Card} from './objects/card';
import {CARDS} from './objects/mock-cards';

@Injectable()
export class CardsService {

  private globalHeaders = new Headers({'Content-Type': 'application/json'});
  private url = 'localhost:4200/api';

  constructor(private http: Http) {
  }

  private handleError(error: Response): Promise<any> {
    return Promise.reject(error.text() || error);
  }

  createNewDeck(): Promise<Deck> {
    const params = new URLSearchParams();
    params.append('deck_count', '1');
    const newDeck = `${this.url}/new/shuffle`;
    return this.http.get(newDeck, {headers: this.globalHeaders, params: params}).toPromise().then( resp => {
      return resp.json() as Deck;
    });
  }

  createNewDeckAndDrawCards(drawCount: number): Promise<Deck> {
    const params = new URLSearchParams();
    params.append('count', drawCount.toString());
    const newDeck = `${this.url}/new/draw`;
    return this.http.get(newDeck, {headers: this.globalHeaders, params: params}).toPromise().then( resp => {
      return resp.json() as Deck;
    });
  }

  createNewDeckAndDraw(drawCount: number): Promise<Deck> {
    const newDeck = `${this.url}/new/draw?count=${drawCount}`;
    return this.http.get(newDeck).toPromise().then( resp => {
      return resp.json() as Deck;
    });
  }

  getCards(): Card[] {
    return CARDS;
  }

}
