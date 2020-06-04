import React from 'react';

import { foodPropTypes } from '../../../../../../../propTypes/food';

import styles from './styles.module.scss';

function Food({ food: { name, description, imageUrl } }) {
  return (
    <div className={styles['food-container']}>
      <img className={styles['food-image']} src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

Food.propTypes = {
  food: foodPropTypes,
};

export default Food;
