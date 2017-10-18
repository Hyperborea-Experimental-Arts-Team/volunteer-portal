/**
 * Superawesome splash screen
 * Seriously, who needs real content with lorem like this?
 *
 * @author mtownsend
 * @since Oct 2017
 **/

import React from 'react';

import DataLoader from '../containers/DataLoader';
import JsonView from './JsonView'

import logo from '../images/logo-blk.svg';
import style from './Splash.css';
import theme from '../theme.css';
import grid from '../grid.css';
import { concat } from '../util';

const Splash = ({ reverse, onLogoClick }) => {
  const className = [ theme.bg_content, style.Splash ];
  if (reverse) {
    className.push(style.reversed);
  }
  return (
    <div className={concat(
      grid.col_sm_12,
      grid.col_md_8,
      grid.col_lg_6
    )}>
      <div className={className.join(' ')}>
        <img src={logo} className={style.logo} alt="logo" onClick={ () => onLogoClick() } />
        <h1 className={style.title}>ENLIST NOW</h1>
        <p className={style.intro}>
          Service guarantees citizenship
        </p>
        <div className={style.dataView}>
          <DataLoader serviceCall="test" component={JsonView} />
        </div>
      </div>
    </div>
  );
};

export default Splash;