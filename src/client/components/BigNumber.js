import React from 'react';

import style from './BigNumber.less';

export default ({ number, label, infoLines }) => {
  return (
      <div className={style.wrap}>
        <div className={style.number}>{number}</div>
        <div className={style.rest}>
          <div className={style.label}>{label}</div>
          {infoLines.map(line => <div className={style.line}>{line}</div>)}
        </div>
      </div>
  );
}