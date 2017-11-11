import React from 'react';

import pin from '../images/pin.svg';
import style from './Address.less';

export default ({ address }) => (
  <div className={style.wrap} style={{ backgroundImage: `url(${pin})`}}>
    {address}
  </div>
);