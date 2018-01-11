import React from 'react';
import expandable from '../containers/expandable';
import DepartmentSummary from './DepartmentSummary';

import style from './EventDepartmentsList.less';

export default ({ departments, longTitle = false }) => (
  <ul className={style.departmentList}>
    {departments.map((d, i) => {
      const ExpandableSummary = expandable(`eo:${d.name}`, DepartmentSummary);
      return (
        <li key={i} className={style.department}>
          <ExpandableSummary {...d} longTitle={longTitle} />
        </li>
      );
    })}
  </ul>
);