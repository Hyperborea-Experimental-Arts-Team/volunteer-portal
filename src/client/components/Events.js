import React from 'react';
import { FormattedMessage } from 'react-intl';
import { concat } from '../util.js';
import EventSummary from './EventSummary';
import Button from './Button';

import grid from '../grid.css';
import theme from '../theme.css';
import style from './Events.css';

function renderEvents(events) {
  return events.map(e => (
    <div className={concat(style.bottomMargin,
                           grid.col_sm_12,
                           grid.col_md_6,
                           grid.col_ld_6)}>
      <EventSummary event={e} />
    </div>
  ));
}

export default ({ active, inactive }) => (
  <div className={style.Events}>
    <div className={grid.row}>
      <section className={concat(style.eventList,
                                 grid.col_sm_12,
                                 grid.col_md_8,
                                 grid.col_lg_8)}>
        <h2 className={concat(style.header, theme.txt_1)}>
          <FormattedMessage id="events.active"
                            defaultMessage="Active Events" />
        </h2>
        <div className={concat(grid.row, style.bottomMargin)}>
          {renderEvents(['foo', 'bar'])}
        </div>
        <h2 className={style.header}>
          <FormattedMessage id="events.inactive"
                            defaultMessage="Inactive Events" />
        </h2>
        <div className={grid.row}>
          {renderEvents(['baz'])}
        </div>
      </section>
      <section className={concat(style.buttons,
                                 grid.col_sm_12,
                                 grid.col_md_4,
                                 grid.col_lg_4)}>
        <Button text={<FormattedMessage id="events.create"
                                        defaultMessage="Create an event" />} />
        <Button text={<FormattedMessage id="events.deactivate"
                                        defaultMessage="Deactivate an event" />} />
      </section>
    </div>
  </div>
);