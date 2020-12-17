import { Model, Q } from '@nozbe/watermelondb'
import { HasManyAssociation } from '@nozbe/watermelondb/Model'
import { field, date, lazy, action, readonly } from '@nozbe/watermelondb/decorators'
import { Card as CardType } from 'src/types'

const blockAssociation: HasManyAssociation = { type: 'has_many', foreignKey: 'card_id' }

export default class Card extends Model implements CardType {
  static table = 'cards'
  static associations = {
    card_blocks: blockAssociation
  }

  @field('uuid') uuid
  @field('title') title
  @field('content') content
  @field('data') data
  @field('type') type
  @date('creation_date') creationDate
  @date('last_update') lastUpdate
  @readonly @date('created_at') createdAt
  @readonly @date('updated_at') updatedAt
  @lazy
  blocks = this.collections
    .get('blocks')
    .query(Q.on('card_blocks', 'card_id', this.id));

  @action async updateCard(callback: (card: CardType) => void) {
    await this.update(callback)
  }
}


