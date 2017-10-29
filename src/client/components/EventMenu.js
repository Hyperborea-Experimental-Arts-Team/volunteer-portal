import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { concat } from '../util';

import style from './EventMenu.less';
import theme from '../theme.css';
import grid from '../grid.less';

function eventLink(eventId, link) {
  return `/event/${eventId}/${link}`;
}

const MenuItem = ({ label, link }) => (
  <li className={style.menuItem}>
    <Link to={link}>{label}</Link>
  </li>
);

export default ({ eventId, eventName, selectedTab }) => (
  <div className={concat(style.EventMenu,
                         theme.page_padding,
                         theme.txt_1,
                         theme.bg_3)}>
    <div className={concat(grid.row)}>
      <div className={concat(grid.col_sm_4, style.eventName)}>
        PAGE TITLE
      </div>
      <nav className={grid.col_sm_8}>
        <ul className={style.menu}>
          <MenuItem link={eventLink(eventId, 'overview')}
                    label={<FormattedMessage id="event.overview" defaultMessage="Event Overview" />}
          />
          <MenuItem link={eventLink(eventId, 'teams')}
                    label={<FormattedMessage id="event.teams" defaultMessage="Departments & Teams" />}
          />
          <MenuItem link={eventLink(eventId, 'volunteers')}
                    label={<FormattedMessage id="event.volunteers" defaultMessage="Volunteers" />}
          />
          <MenuItem link={eventLink(eventId, 'schedule')}
                    label={<FormattedMessage id="event.schedule" defaultMessage="Schedule" />}
          />
        </ul>
      </nav>
    </div>
  </div>
);