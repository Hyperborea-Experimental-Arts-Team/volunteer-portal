import React from 'react';

import style from './Error.less';

export default ({ message }) => (
  <div className={style.error}>{message}</div>
);