import React from 'react';
import { FormattedMessage } from 'react-intl';
import { concat } from '../util';
import Image from './Image';
import Content from './Content';
import Button from './Button';
import BigDate from './BigDate';
import BigNumber from './BigNumber';

import grid from '../grid.less';
import theme from '../theme.css';
import style from './EventOverview.less';

export default ({ photo, address, startDate, endDate, description }) => (
  <div className={concat(grid.row, theme.page_padding)}>
    <section className={grid.col_sm_4}>
      <Image url={photo} ratio={1} />
      <Content>{address}</Content>
      <Button text={<FormattedMessage id="event.edit" defaultMessage="Edit Event" />}
              className={concat(style.button, theme.bg_3)} />
      <Button text={<FormattedMessage id="event.deactivate" defaultMessage="Deactivate Event" />}
              className={concat(style.button, theme.bg_2)} />
    </section>
    <section className={grid.col_sm_8}>
      <div className={concat(style.info, theme.bg_content)}>
        <div className={concat(style.numberSection, theme.divider)}>
          <div>
            <BigDate
              date={startDate}
              label={<FormattedMessage id="date.start" defaultMessage="Start" />}
            />
            <BigDate
              date={endDate}
              label={<FormattedMessage id="date.end" defaultMessage="End" />}
            />
          </div>
          <div>
            <BigNumber
              label={<FormattedMessage id="role.hours" defaultMessage="Hours Per Role" />}
              infoLines={[
                'Officer Of The Day -',
                'Fire Art Safety Team'
              ]}
              number={20}
            />
            <BigNumber
                label={<FormattedMessage id="role.hours" defaultMessage="Hours Per Role" />}
                infoLines={[
                'Officer Of The Day -',
                'Fire Art Safety Team'
              ]}
                number={20}
            />
          </div>
        </div>
        <div className={style.descriptionSection}>
          <h3 className={style.title}>
            <FormattedMessage id="event.description" defaultMessage="Description" />
          </h3>
          {description}
        </div>
      </div>
    </section>
  </div>
)
