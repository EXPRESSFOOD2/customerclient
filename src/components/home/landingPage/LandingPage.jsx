import React from "react";
import style from "./landingPage.module.css";

export default function LandingPage() {
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <h3>Ready, and without delay</h3>
        <button>Orden Now</button>
      </div>
    </div>
  );
}
