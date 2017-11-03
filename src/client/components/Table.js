import React from 'react';

import style from './Table.less';

const Row = ({ data, widths }) => (
  <div className={style.row}>
    {data.map((d, i) => <div key={i} className={style.column} style={{ minWidth: `${widths[i]}%` }}>{d}</div>)}
  </div>
);

export default ({ headings, rows, widths }) => (
  <div>
    <div className={style.headingRow}>
      {headings.map((h, i) => <div key={i} className={style.heading} style={{ minWidth: `${widths[i]}%` }}>{h}</div>)}
    </div>
    {rows.map((r, i) => <Row key={i} data={r} widths={widths} />)}
  </div>
);