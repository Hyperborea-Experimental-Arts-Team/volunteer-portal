/**
 * Component for user login
 *
 * @author mtownsend
 * @since Oct 2017
 **/

import React from 'react';

import { concat } from '../util';
import style from './Button.css';
import theme from '../theme.css';

export default ({ icon, text, type, onClick, border, className = '' }) => (
  <button className={concat(className, style.Button)}
          style={ border ? { border: '1px solid' } : null}
          type={type}
          onClick={onClick}>
    {icon ?
      <div className={style.icon} style={{ backgroundImage: `url(${icon})` }}>
        {text}
      </div> : text
    }
  </button>
);
