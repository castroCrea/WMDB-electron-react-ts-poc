import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'
import { BelongsToAssociation } from '@nozbe/watermelondb/Model'

const cardAssociation: BelongsToAssociation = { type: 'belongs_to', key: 'card_id' }
const blockAssociation: BelongsToAssociation = { type: 'belongs_to', key: 'block_id' }

export default class CardBlock extends Model {
  static table = 'card_blocks'
  static associations = {
    cards: cardAssociation,
    blocks: blockAssociation
  }

  @field('card_id') cardId: unknown
  @field('block_id') userId: unknown
}
