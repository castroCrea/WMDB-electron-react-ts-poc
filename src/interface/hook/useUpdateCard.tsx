/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Card from 'src/db/model/Card';
import { CardUpdate } from 'src/types';
import { useDatabase } from '@nozbe/watermelondb/hooks'
import { Collection } from '@nozbe/watermelondb';

export default (cardId: string) => {
  const [card, setCard] = React.useState<Card | undefined>();
  const database = useDatabase();
  const cardsCollection: Collection<Card> = React.useMemo(() => database.get('cards'), [database]);

  React.useEffect(() => {
    (async () => {
      const cardFind = await cardsCollection.find(cardId);
      if (cardFind)
        setCard(cardFind)
    })()
  }, [cardId, cardsCollection])

  const updateCard = React.useCallback(async (newCard: CardUpdate) => {
    await card?.updateCard(c => {
      Object.keys(newCard).forEach(key => {
        c[key] = newCard[key]
      })
    })
  }, [card])

  return { updateCard }
}
