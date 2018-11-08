export class CardImage {
  png: string;
  svg: string;
}

export class Card {
  image: string;
  value: string;
  suit: string;
  code: string;
  images: CardImage;
}
