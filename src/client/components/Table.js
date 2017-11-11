import React from 'react';
import { concat } from '../util';

import add from '../images/add.svg';
import minus from '../images/minus.svg';
import style from './Table.less';

const RowTemplate = ({ icon, data, widths, className }) => {
  const style = icon ? { backgroundImage: `url(${icon})` } : {};
  return (
      <div className={className}>
        {data.map((h, i) => <div key={i} style={Object.assign(style, { minWidth: `${widths[i]}%` })}>{h}</div>)}
      </div>
  );
}

const SubRow = ({ data, widths }) => (
    <RowTemplate data={data} widths={widths} className={style.subRow} />
);

export const Header = ({ data, widths }) => (
  <RowTemplate data={data} widths={widths} className={style.headingRow} />
);

export const Row = ({ data, widths, icon }) => (
  <RowTemplate icon={icon} data={data} widths={widths} className={style.row} />
);

export const ExpandableRow = ({ data, widths, subRows, expanded, toggle }) => (
  <div className={concat(style.expandableRow,
                         expanded ? style.expanded : '')}
       onClick={toggle}>
    <Row data={data} widths={widths} icon={expanded ? minus : add} />
    {expanded ? subRows.map((d, i) => <SubRow key={i} data={d} widths={widths} />) : null}
  </div>
);

export const Table = ({ header, rows }) => (
  <div>
    {header}
    {rows}
  </div>
);