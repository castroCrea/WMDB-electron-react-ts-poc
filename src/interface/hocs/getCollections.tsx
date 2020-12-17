/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'
import withObservables from '@nozbe/with-observables'

export default (
  WrappedComponent: React.ComponentType<any>, field: string
) => {
  const ComponentWithExtraInfo = withDatabase(withObservables([], ({ database }: { database: any }) => ({
    [field]: database.collections?.get(field)?.query()?.observe(),
  }))(WrappedComponent));

  return ComponentWithExtraInfo;
}
