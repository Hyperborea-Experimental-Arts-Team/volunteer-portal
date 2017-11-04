import React from 'react';

import style from './Table.less';

const RowTemplate = ({ data, widths, className }) => (
  <div className={className}>
    {data.map((h, i) => <div key={i} style={{ minWidth: `${widths[i]}%` }}>{h}</div>)}
  </div>
);

const SubRow = ({ data, widths }) => (
    <RowTemplate data={data} widths={widths} className={style.subRow} />
);

export const Header = ({ data, widths }) => (
  <RowTemplate data={data} widths={widths} className={style.headingRow} />
);

export const Row = ({ data, widths }) => (
  <RowTemplate data={data} widths={widths} className={style.row} />
);

export const ExpandableRow = ({ data, widths, subRows, expanded, toggle }) => (
  <div className={style.expandableRow} onClick={toggle}>
    <Row data={data} widths={widths} />
    {expanded ? subRows.map((d, i) => <SubRow key={i} data={d} widths={widths} />) : null}
  </div>
);

export const Table = ({ header, rows }) => (
  <div>
    {header}
    {rows}
  </div>
);