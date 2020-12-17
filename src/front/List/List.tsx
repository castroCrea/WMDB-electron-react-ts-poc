import React from 'react';
import Card from '../../db/model/Card';
import ListItem from './components/ListItem';

type Props = {
  cards: Card[]
}

export default React.memo(({ cards }: Props) => {

  // React.useEffect(() => {

  // }, [])
  console.log(cards);
  // console.log(database.collections.get('cards').query().fetch())
  return <ul>
    {cards.map((card: any) => {
      console.log(card.update)
      return <ListItem card={card} key={card.id} />
    })}
  </ul >
})
