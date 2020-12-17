import { synchronize } from '@nozbe/watermelondb/sync'
import { database } from './connectDb'
import { fakeData } from './fakeData'

export default async (): Promise<void> => {
  // const bearerToken = ''
  // const bearer = 'Bearer ' + bearerToken
  // const url = process.env.REACT_APP_API_URL

  await synchronize({
    database,
    pullChanges: async ({ lastPulledAt }) => {
      // pullChanges: async ({ lastPulledAt, schemaVersion, migration }) => {
      return fakeData;

      // const response = await fetch(`${url}/api/sync/watermelon`, {
      //   body: JSON.stringify({ lastPulledAt, schemaVersion, migration }),
      //   headers: {
      //     Authorization: bearer,
      //     'Content-Type': 'application/json'
      //   }
      // })
      // if (!response.ok) {
      //   throw new Error(await response.text())
      // }

      // const { changes, timestamp } = await response.json()
      // return { changes, timestamp }
    },
    pushChanges: async ({ changes, lastPulledAt }) => {
      // const response = await fetch(`https://my.backend/sync?last_pulled_at=${lastPulledAt}`, {
      //   method: 'POST',
      //   body: JSON.stringify(changes),
      //   headers: {
      //     Authorization: bearer,
      //     'Content-Type': 'application/json'
      //   }
      // })
      // if (!response.ok) {
      //   throw new Error(await response.text())
      // }
    },
    // migrationsEnabledAtVersion: 1
  })
}
