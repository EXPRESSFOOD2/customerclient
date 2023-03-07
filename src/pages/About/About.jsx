import React from "react";
import style from "./About.module.css";
import AboutCard from "../../components/About/AboutCard";
import { devsData } from "./data";

export default function About() {
  return (
    <>
      <div className={style.page}>
        <h1>Nuestro Staff</h1>
        <div className={style.container}>
          {devsData?.map((dev) => {
            return (
              <AboutCard
                name={dev.nombre}
                image={dev.imagen}
                github={dev.github}
                title={dev.titulo}
                linkedin={dev.linkedin}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
