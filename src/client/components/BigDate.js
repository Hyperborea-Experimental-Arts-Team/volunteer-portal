import React from 'react';
import BigNumber from './BigNumber';
import { FormattedDate } from 'react-intl';

export default ({ date, label, className = '', light }) => {
  const d = new Date(date);
  return (
    <BigNumber
      label={label}
      number={d.getDate()}
      className={className}
      light={light}
      infoLines={[
        <FormattedDate value={d} year="numeric" month="long" />,
        <FormattedDate value={d} weekday="long" hour="numeric" minute="numeric" />
      ]}
    />
  );
}