import React, { useEffect } from 'react'
import styles from './OrderPage.module.css';
import OrdersComponent from '../../components/Orders/Orders';
import { useDispatch, useSelector } from 'react-redux';
import { saveCart } from '../../redux/actions';
import { Link } from "react-router-dom"

const OrderPage = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const myOrders = useSelector(state=>state.cartSaved)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(saveCart({email:user.email}))
  })

  return (
      <div className={styles.page}>
          <div className={styles.container}>{
              myOrders.length
                  ? myOrders.map((item) => (
                      <OrdersComponent
                          key={item.id}
                          name={item.name}
                          image={item.url_image} />
                  ))
                  : (<div className={styles.message}>
            <h2>¿Aún no haces tu primer compra... 🫣?</h2>
            <Link to="/store">
                  <span>Haz tu compra ahora 😎</span>
            </Link>
            </div>)
          }</div>
    </div>
  )
}

export default OrderPage