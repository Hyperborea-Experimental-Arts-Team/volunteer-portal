/**
 * Component for user login
 *
 * @author mtownsend
 * @since Oct 2017
 **/

import React from 'react';

import { concat } from '../util';
import styles from './Button.css';
import theme from '../theme.css';

export default ({ text, type, onClick, border, className }) => {

  return (
    <button className={`${className} ${styles.Button}`}
            style={ border ? { border: '1px solid' } : null}
            type={type}
            onClick={onClick}>{text}</button>
  );
};