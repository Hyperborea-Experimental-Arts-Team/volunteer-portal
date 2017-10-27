import React from 'react';
import DataLoader from './DataLoader';
import Events from '../components/Events';

export default () => (
  <DataLoader serviceCall="events" component={Events} />
);