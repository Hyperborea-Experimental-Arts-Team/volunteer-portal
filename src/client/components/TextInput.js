/**
 * Basic text input field
 *
 * @author mtownsend
 * @since Oct 2017
 */
import React from 'react';
//import styles from './TextInput.css';

export default ({name, value, placeholder, onChange}) => (
  <input type="text"
         value={value}
         name={name}
         onChange={onChange}
         placeholder={placeholder}
  />
);