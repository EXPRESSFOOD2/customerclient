/* eslint-disable react/prop-types */
import React from 'react'
// import { useSelector } from 'react-redux';
import styles from './Orders.module.css';

const OrdersComponent = (props) => {
    // const cartSaved = useSelector(state => state.cartSaved)
  return (
      <div className={styles.card}>
          <img src={props.image} alt="" />
          <div className={styles.detail}>
              <h3>{props.name}</h3>
              <span>Cantidad Comprada: (7)</span>
          </div>
          <div className={styles.statusOrder}>
              <span>Estado:</span>
              <span className={styles.status}>En Proceso</span>
          </div>
      </div>
  );
}

export default OrdersComponent