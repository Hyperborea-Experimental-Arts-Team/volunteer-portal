import React from 'react';
import { FormattedMessage } from 'react-intl';
import PageTitle from './PageTitle';
import { concat } from '../util';
import DataLoader from '../containers/DataLoader';
import SearchForm from './SearchForm';
import Link from './Link';

import grid from '../grid.less';
import theme from '../theme.css';
import style from './EventVolunteers.less';
import carratSvg from '../images/down-carrat.svg';
import recentSvg from '../images/recent.svg';
import listSvg from '../images/worklist.svg';
import tilesSvg from '../images/apps.svg';

const Title = ({ eventId }) => (
  <div className={theme.page_padding}>
    <div className={grid.row}>
      <div className={grid.col_sm_4} style={{position: 'relative'}}>
        <PageTitle className={theme.txt_lightest}
                   title={<FormattedMessage id="event.volunteers" defaultMessage="Volunteers" />}
                   link={`/event/${eventId}/overview`} />
      </div>
    </div>
  </div>
);

const Controls = ({ }) => (
  <div className={concat(style.controls, theme.page_padding, theme.bg_3)}>
    <div className={grid.row}>
      <div className={grid.col_sm_6}>
        <SearchForm />
      </div>
      <div className={concat(grid.col_sm_4, style.links)}>
        <Link label={<FormattedMessage id="search.filter"
                                       defaultMessage="Filter Search" />}
              icon={carratSvg}
              className={theme.txt_lightest}
        />
        <Link label={<FormattedMessage id="search.clear"
                                       defaultMessage="Clear All Filters" />}
              icon={recentSvg}
              className={theme.txt_lightest}
        />
      </div>
      <div className={concat(grid.col_sm_2, style.icons)}>
        <img src={listSvg} className={style.iconButton} />
        <img src={tilesSvg} className={style.iconButton} />
      </div>
    </div>
  </div>
);

const VolunteerList = ({ }) => (
  <div className={theme.bg_content} style={{ height: '500px' }}>
    TODO
  </div>
);

export default ({ eventId }) => (
  <div>
    <Title eventId={eventId} />
    <Controls />
    <div className={theme.page_padding}>
      <VolunteerList />
    </div>
  </div>
);
