import React from 'react';
import { concat } from '../util';
import style from './Image.less';

export default ({className = '', url, ratio, children}) => (
  <div className={concat(className, style.Image)} style={{ backgroundImage: `url(/${url})`,
                                        paddingBottom: `${(1 / ratio) * 100}%`}}>
    {children}
  </div>
)