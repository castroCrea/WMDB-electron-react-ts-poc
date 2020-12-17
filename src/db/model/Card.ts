import { Model, Q } from '@nozbe/watermelondb'
import { HasManyAssociation } from '@nozbe/watermelondb/Model'
import { field, date, lazy } from '@nozbe/watermelondb/decorators'

const blockAssociation: HasManyAssociation = { type: 'has_many', foreignKey: 'card_id' }

export default class Post extends Model {
  static table = 'cards'
  static associations = {
    card_blocks: blockAssociation
  }

  @field('title') title: unknown
  @field('content') content: unknown
  @field('uuid') uuid: unknown
  @field('data') data: unknown
  @field('type') type: unknown
  @date('created_at') createdAt: unknown
  @date('updated_at') updatedAt: unknown
  @lazy
  blocks = this.collections
    .get('blocks')
    .query(Q.on('card_blocks', 'card_id', this.id));
}
