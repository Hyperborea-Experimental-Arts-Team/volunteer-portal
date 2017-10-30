import React from 'react';

import { concat } from '../util';
import theme from '../theme.css';
import style from './BigNumber.less';

export default ({ number, label, infoLines, className = '', light}) => {
  return (
      <div className={`${className} ${style.wrap}`}>
        <div className={style.number}>{number}</div>
        <div className={style.rest}>
          <div className={concat(light ? theme.txt_lightest : theme.txt_darkest, style.label)}>{label}</div>
          {infoLines.map(line =>
              <div className={concat(light ? theme.txt_lightest : theme.txt_dark, style.line)}>{line}</div>
          )}
        </div>
      </div>
  );
}