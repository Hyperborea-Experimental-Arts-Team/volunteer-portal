import React from 'react';

import style from './Table.less';

const Row = ({ data }) => (
  <div className={style.row}>
    {data.map((d, i) => <div key={i} className={style.column}>{d}</div>)}
  </div>
);

export default ({ headings, rows }) => (
  <div>
    <div className={style.headingRow}>
      {headings.map((h, i) => <div key={i} className={style.heading}>{h}</div>)}
    </div>
    {rows.map((r, i) => <Row key={i} data={r} />)}
  </div>
);