import React from 'react';
import Content from './Content';
import { concat } from '../util';
import theme from '../theme.css';
import grid from '../grid.less';

export default () => (
  <div className={concat(grid.row, theme.page_padding)}>
    <div className={grid.col_sm_12}>
      <Content>TODO</Content>
    </div>
  </div>
);