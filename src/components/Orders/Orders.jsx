/* eslint-disable react/prop-types */
import React from 'react'
// import { useSelector } from 'react-redux';
import styles from './Orders.module.css';

const OrdersComponent = (props) => {
    // const cartSaved = useSelector(state => state.cartSaved)
  return (
      <div className={styles.card}>
          <img src={props.image} alt="" />
          <span>{props.name}</span>
      </div>
  );
}

export default OrdersComponent