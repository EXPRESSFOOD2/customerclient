import React, { useState } from 'react'
import OrdersComponent from '../../components/Orders/Orders';

const OrderPage = () => {
    const myOrder = JSON.parse(localStorage.getItem("myOrder"));
    const[orders] = useState([...myOrder])
  return (
      <div>
          <div>{
              orders.length
                  ? myOrder.map((item) => (
                      <OrdersComponent
                          key={item.id}
                          name={item.name}
                          image={item.url_image} />
                  ))
                  : (<div>
                  <h2>No tienes Ordenes Pendientes</h2>
                  <span>Haz tu compra ahora 😊</span>
            </div>)
          }</div>
    </div>
  )
}

export default OrderPage