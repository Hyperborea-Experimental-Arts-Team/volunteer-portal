import React from 'react';
import { Link } from 'react-router-dom';

import style from './Brand.less';

export default ({ size }) => (
  <Link to="/events" className={style.brand} style={{fontSize: `${size}px`}}>Nyan</Link>
);