import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'cards',
      columns: [
        { name: 'uuid', type: 'string' },
        { name: 'title', type: 'string', isOptional: true },
        { name: 'content', type: 'string', isOptional: true },
        { name: 'data', type: 'string', isOptional: true },
        { name: 'type', type: 'string' },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' }
      ]
    }),
    tableSchema({
      name: 'blocks',
      columns: [
        { name: 'uuid', type: 'string' },
        { name: 'data', type: 'string' },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' }
      ]
    }),
    tableSchema({
      name: 'card_blocks',
      columns: [
        { name: 'card_id', type: 'string', isIndexed: true },
        { name: 'block_id', type: 'string', isIndexed: true }
      ]
    })
  ]
})
