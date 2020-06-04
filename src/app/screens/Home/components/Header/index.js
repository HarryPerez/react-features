import React from 'react';

import logo from '../../../../assets/icons/logo.svg';

import styles from './styles.module.scss';

function HomeHeader() {
  return (
    <header className={styles['home-header']}>
      <img src={logo} className={styles['home-logo']} alt='logo' />
      <h1 className={styles['home-title']}>Welcome to React features</h1>
    </header>
  );
}

export default HomeHeader;
