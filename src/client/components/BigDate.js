import React from 'react';
import BigNumber from './BigNumber';
import { FormattedDate } from 'react-intl';

export default ({ date, label }) => {
  const d = new Date(date);
  return (
    <BigNumber
      label={label}
      number={d.getDate()}
      infoLines={[
        <FormattedDate value={d} year="numeric" month="long" />,
        <FormattedDate value={d} weekday="long" hour="numeric" minute="numeric" />
      ]}
    />
  );
}