
export interface CardUpdate {
  uuid?: string;
  title?: string;
}

export interface Card extends CardUpdate {
  uuid: string;
}