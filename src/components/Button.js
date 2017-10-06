/**
 * Component for user login
 *
 * @author mtownsend
 * @since Oct 2017
 **/

import React from 'react';
import styles from './Button.css';

export default ({ text, type, onClick }) => {
  return (
    <button className={styles.Button} type={type} onClick={onClick}>{text}</button>
  );
};