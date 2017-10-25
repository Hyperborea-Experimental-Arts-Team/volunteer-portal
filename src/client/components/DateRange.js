import React from 'react';
import { FormattedDate } from 'react-intl';
import Content from './Content';

export default ({ start, end }) => (
  <Content>
    <FormattedDate value={start} day="numeric" month="short" year="numeric" /> - <FormattedDate value={end} day="numeric" month="short" year="numeric" />
  </Content>
);