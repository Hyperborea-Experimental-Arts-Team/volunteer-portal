import React from 'react';
import { FormattedMessage } from 'react-intl';
import { concat } from '../util';
import UserBadge from './UserBadge';
import Table from './Table';

import style from './DepartmentSummary.less';
import theme from '../theme.css';

export default ({ name, lead }) => (
  <section className={concat(theme.bg_content, style.wrapper)}>
    <div className={style.header}>
      <div className={style.title}>
        <FormattedMessage
            id="department.needs"
            defaultMessage="{title} Department Volunteer Needs"
            values={{ title: name }} />
      </div>
      <UserBadge {...lead} title={
        <FormattedMessage
            id="lead.title"
            defaultMessage="{department} Lead"
            values={{ department: name }} />}
      />
    </div>
    <Table
        headings={[
          <FormattedMessage id="team.name" defaultMessage="Team" />,
          <FormattedMessage id="team.minShifts" defaultMessage="Min. Shifts" />,
          <FormattedMessage id="team.maxShifts" defaultMessage="Max. Shifts" />,
          <FormattedMessage id="team.filledShifts" defaultMessage="Filled Shifts" />,
          <FormattedMessage id="team.status" defaultMessage="Status" />
        ]}
        rows={[
          ['foo', 'foo', 'foo', 'foo', 'foo'],
          ['bar', 'bar', 'bar', 'bar', 'bar'],
          ['baz', 'baz', 'baz', 'baz', 'baz'],
          ['boz', 'boz', 'boz', 'boz', 'boz']
        ]}
    />
  </section>
);