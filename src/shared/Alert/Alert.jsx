/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import style from './alert.module.css'
import data from './styleType.json'
import ReactDOM from 'react-dom'

export default function Alert ({
  title = 'Correcto',
  message = 'Todo salio bien',
  type = 'danger',
  setStateAlert,
  setStatebutton,
  stateAlert

}) {
  const img = data[type]?.icon || data.success.icon
const [isVisible, setIsVisible] = useState(stateAlert)
  setTimeout(() => remove(), 5000)

  const remove = () => {
    setStateAlert(false)
    setStatebutton(false)
  }
  
  setTimeout(() => {
    setStateAlert(false)
    setStatebutton(false)
  }, 5000);
  return (
    isVisible &&
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
