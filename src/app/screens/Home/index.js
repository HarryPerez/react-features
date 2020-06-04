import React from 'react';

import HomeHeader from './components/Header';
import FoodList from './components/FoodList';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.home}>
      <HomeHeader />
      <FoodList />
    </div>
  );
}

export default Home;
