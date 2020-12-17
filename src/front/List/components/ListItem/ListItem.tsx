/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Card } from 'src/interface/types';
import { useUpdateCard } from 'src/interface/hook';

type Props = {
  title?: string
  card: Card
}

export default ({ card }: Props) => {
  const { updateCard } = useUpdateCard(card.id);

  return (
    <li>
      <input type="text" value={card.title} onChange={async (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event?.target?.value;
        console.log(value)
        await updateCard({
          title: value
        })
      }} />
    </li>
  )
}
