/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import style from './alert.module.css'
import data from './styleType.json'
import ReactDOM from 'react-dom'

export default function Alert ({
  title = 'Correcto',
  message = 'Todo salio bien',
  type = 'danger'
}) {
  const img = data[type]?.icon || data.success.icon

  setTimeout(() => remove(), 5000)

  const remove = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('alert'))
  }

  return (
    <div className={style.container} id="alertBox">
      <div className={style.box}>
        <img
          style={{ borderLeft: `5px solid ${data[type].color}` }}
          src={img}
          alt=""
        />
        <div className={style.infoContainer}>
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
        <div className={style.close} onClick={remove}>
          X
        </div>
      </div>
    </div>
  )
}
