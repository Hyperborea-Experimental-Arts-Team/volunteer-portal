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

export default ({ text, type, onClick, className }) => {

  return (
    <button className={`${className} ${concat(theme.txt_1, styles.Button)}`} type={type} onClick={onClick}>{text}</button>
  );
};