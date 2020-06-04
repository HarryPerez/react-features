import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actionCreators from '../../../../../redux/Food/actions';
import { foodPropTypes } from '../../../../../propTypes/food';

import Food from './components/Food';

import styles from './styles.module.scss';

function FoodList({ foods, foodsLoading, getFoods }) {
  useEffect(() => {
    getFoods();
  }, [getFoods]);

  return (
    !foodsLoading && (
      <div className={styles['food-list']}>
        {foods.map((food) => (
          <Food key={food.id} food={food} />
        ))}
      </div>
    )
  );
}

FoodList.propTypes = {
  getFoods: PropTypes.func.isRequired,
  foods: PropTypes.arrayOf(foodPropTypes),
  foodsLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  foods: state.foods,
  foodsLoading: state.foodsLoading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);
