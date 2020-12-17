import { Database } from '@nozbe/watermelondb'
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs'

import schema from './model/schema'
import Card from './model/Card'
import Block from './model/Block'
import CardBlock from './model/CardBlock'

// First, create the adapter to the underlying database:
const adapter = new LokiJSAdapter({
  schema,
  // migrations, // optional migrations
  useWebWorker: false, // recommended for new projects. tends to improve performance and reduce glitches in most cases, but also has downsides - test with and without it
  useIncrementalIndexedDB: true, // recommended for new projects. improves performance (but incompatible with early Watermelon databases)
  dbName: 'lazy' // optional db name
  // It's recommended you implement this method:
  // onIndexedDBVersionChange: () => {
  // database was deleted in another browser tab (user logged out), so we must make sure we delete
  // it in this tab as well
  // if (checkIfUserIsLoggedIn()) {
  //   window.location.reload()
  // }
  // },
  // Optional:
  // onQuotaExceededError: (error) => {
  //   console.log(error)
  // }
})

// Then, make a Watermelon database from it!
export const database = new Database({
  adapter,
  modelClasses: [
    Card,
    Block,
    CardBlock
  ],
  actionsEnabled: true
})
