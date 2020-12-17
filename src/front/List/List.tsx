/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Card } from 'src/interface/types';
import ListItem from './components/ListItem';

type Props = {
  cards: Card[]
}

export default ({ cards }: Props) => {
  return <div>
    <ul>
      {cards.map((card: Card) => <ListItem card={card} key={card.id} />
      )}
    </ul >
  </div>
}
