import React from 'react';
import { FormattedMessage } from 'react-intl';
import PageTitle from './PageTitle';
import { concat } from '../util';

import grid from '../grid.less';
import theme from '../theme.css';
import style from './EventDepartments.less';

export default event => (
  <div className={concat(style.wrap, grid.row, theme.page_padding)}>
    <section className={grid.col_sm_4} style={{position: 'relative'}}>
      <PageTitle className={theme.txt_lightest}
                 title={<FormattedMessage id="event.teams" defaultMessage="Departments & Teams" />}
                 link={`/event/${event.id}/overview`} />
    </section>
    <section className={grid.col_sm_8}>

    </section>
  </div>
);