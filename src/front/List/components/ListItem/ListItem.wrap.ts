import withObservables from '@nozbe/with-observables'
import Card from '../../../../db/model/Card'
import ListItem from './ListItem'

const enhance = withObservables(['card'], ({ card }: { card: Card }) => ({
  card
}))

export default enhance(ListItem);
