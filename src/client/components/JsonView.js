/**
 * Displays JSON data in monospace font.
 * This is just a development tool.
 *
 * @author mtownsend
 * @since Oct 2017
 */
import React from 'react';
import styles from './JsonView.css';

export default json => {
  return (
    <div className={styles.JsonView}>
      {JSON.stringify(json)}
    </div>
  );
};