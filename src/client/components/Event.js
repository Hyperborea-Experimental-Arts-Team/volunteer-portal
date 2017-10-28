import React from 'react';

import { concat } from '../util';
import style from './Event.css';
import theme from '../theme.css';
import grid from '../grid.less';

export default ({ match }) => (
  <div className={grid.row}>
    <div className={concat(grid.col_sm_12,
                           theme.txt_2,
                           style.temp)}>
      {match.params.id} {match.url}
    </div>
  </div>
);