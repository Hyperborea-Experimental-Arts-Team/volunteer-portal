import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { concat } from '../util.js';
import EventSummary from './EventSummary';
import Button from './Button';

import addSvg from '../images/add.svg';
import xSvg from '../images/x.svg';
import grid from '../grid.less';
import theme from '../theme.css';
import style from './Events.css';

function renderEvents(events) {
  return events.map(e => (
    <Link key={e.id} to={`/event/${e.id}/overview`}
         className={concat(grid.col_sm_12,
                           grid.col_md_6,
                           grid.col_ld_6)}>
      <EventSummary event={e} />
    </Link>
  ));
}

function renderSection(title, list, first = false) {
  if (!list || list.length === 0) {
    return null;
  }
  return (
    <section>
      <h2 className={concat(style.header, first ? theme.txt_lightest : theme.txt_darkest)}>
        {title}
      </h2>
      <div className={concat(grid.row, style.bottomMargin)}>
        {renderEvents(list)}
      </div>
    </section>
  )
}

export default events => {

  const active = [], inactive = [];
  for (let event of Object.values(events)) {
    (event.active ? active : inactive).push(event);
  }

  return (
    <div className={concat(theme.page_padding, grid.row)}>
      <section className={concat(style.eventList,
                                 grid.col_sm_12,
                                 grid.col_md_8,
                                 grid.col_lg_8)}>
        {renderSection(<FormattedMessage id="events.active" defaultMessage="Active Events" />, active, true)}
        {renderSection(<FormattedMessage id="events.inactive" defaultMessage="Inactive Events" />, inactive)}
      </section>
      <section className={concat(style.buttons,
                                 grid.col_sm_12,
                                 grid.col_md_4,
                                 grid.col_lg_4)}>
        <Button text={<FormattedMessage id="events.create"
                                        defaultMessage="Create an event"/>}
                icon={addSvg}
                border={true}
                className={theme.txt_darkest}
        />
        <Button text={<FormattedMessage id="events.deactivate"
                                        defaultMessage="Deactivate event"/>}
                icon={xSvg}
                className={concat(theme.txt_lightest, theme.bg_2)}
        />
      </section>
    </div>
  );
}