/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { useDatabase } from '@nozbe/watermelondb/hooks'
import { IBlock } from '../../../../db/model/Block';

type Props = {
  card: IBlock
}

export default ({ card }: Props) => {
  const database = useDatabase();

  return (
    <li key={card.id} >
      <span>{card.uuid}</span>
      <input type="text" value={card.title} onChange={async (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event?.target?.value;
        console.log(value)
        await database.action(async () => {
          await card.update((c: any) => {
            c.title = value;
          })
        });
      }} />
    </li>
  )
}
