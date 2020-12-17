import { Model, Q } from '@nozbe/watermelondb'
import { HasManyAssociation } from '@nozbe/watermelondb/Model'
import { lazy, field, date } from '@nozbe/watermelondb/decorators'

const cardAssociation: HasManyAssociation = { type: 'has_many', foreignKey: 'block_id' }

export default class Block extends Model {
  static table = 'blocks';
  static associations = {
    card_blocks: cardAssociation
  }

  @field('uuid') uuid: unknown
  @field('data') data: unknown
  @date('creation_date') creationDate: unknown
  @date('last_update') lastUpdate: unknown
  @lazy
  cards = this.collections
    .get('cards')
    .query(Q.on('card_blocks', 'block_id', this.id));
}
