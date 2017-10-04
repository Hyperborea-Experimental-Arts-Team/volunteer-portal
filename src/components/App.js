import React, { Component } from 'react';
import logo from '../images/logo.svg';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>ENLIST NOW</h1>
        </header>
        <p className={styles.intro}>
          Service guarantees citizenship
        </p>
      </div>
    );
  }
}

export default App;
