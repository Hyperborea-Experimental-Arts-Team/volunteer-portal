import React from 'react';
import style from './Image.less';

export default ({url, ratio, children}) => (
  <div className={style.Image} style={{ backgroundImage: `url(/${url})`,
                                        paddingBottom: `${(1 / ratio) * 100}%`}}>
    {children}
  </div>
)