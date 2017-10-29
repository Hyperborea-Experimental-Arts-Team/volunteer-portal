import React from 'react';

import EventMenu from './EventMenu';
import Content from './Content';

import { concat } from '../util';
import style from './Event.less';
import theme from '../theme.css';
import grid from '../grid.less';

export default ({ match }) => (
  <div className={style.Event}>
    <EventMenu eventId={match.params.id} selectedTab={match.params.selectedTab} />
    <div className={concat(grid.row, theme.page_padding)}>
      <div className={concat(grid.col_sm_12,
                             theme.txt_2,
                             style.temp)}>
        <Content>{match.params.id} {match.url} </Content>
      </div>
    </div>
  </div>
);