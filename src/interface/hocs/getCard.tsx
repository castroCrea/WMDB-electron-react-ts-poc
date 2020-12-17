/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import withObservables from '@nozbe/with-observables'
import Card from 'src/db/model/Card';

export default (
  WrappedComponent: React.ComponentType<any>
) => {

  const enhance = withObservables(['card'], ({ card }: { card: Card }) => ({
    card: card,
  }));

  return enhance(WrappedComponent);
}
