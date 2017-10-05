/**
 * Component for user login
 *
 * @author mtownsend
 * @since Oct 2017
 **/

import React from 'react';
import AuthButton from '../containers/AuthButton';
import styles from './Login.css';

const Login = () => {
  return (
    <div className={styles.Login}>
      THIS IS THE LOGIN PAGE
      <br/><br/>
      <AuthButton />
    </div>
  );
};

export default Login;