/**
 * Component for user login
 *
 * @author mtownsend
 * @since Oct 2017
 **/

import React from 'react';
import styles from './Button.css';

export default ({ text, onClick }) => {
  return (
    <div className={styles.Button} onClick={onClick}>{text}</div>
  );
};