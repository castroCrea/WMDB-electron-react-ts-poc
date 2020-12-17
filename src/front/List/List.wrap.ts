import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'
import withObservables from '@nozbe/with-observables'
import List from './List'

export default withDatabase(withObservables([], ({ database }: { database: any }) => ({
  cards: database.collections.get('cards').query().observe(),
}))(List))
