import React, { useEffect, useState } from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ pagina, setPagina, maximo }) => {
  useEffect(() => {
    if (parseInt(pagina) > maximo) {
      setPagina(maximo);
    } else if (parseInt(pagina) < 1 && maximo > 0) {
      setPagina(1);
    }
  }, [maximo, pagina, setPagina]);

  const [valueInput, setVauleInput] = useState("");

  const handleChage = (event) => {
    setVauleInput(event.target.value);
  };

  const handleKeyUp = (event) => {
    const { value } = event.target;
    const keycode = event.keyCode || event.which;
    if (keycode === 13) {
      if (value !== "") {
        if (parseInt(value) < 1) {
          setPagina(1);
          setVauleInput("");
        } else if (parseInt(value) > maximo) {
          setPagina(maximo);
          setVauleInput("");
        } else {
          setPagina(value);
          setVauleInput("");
        }
      } else {
        setPagina(1);
        setVauleInput("");
      }
    }
  };

  const nextFunction = () => {
    if (pagina < maximo) setPagina(parseInt(pagina) + 1);
  };

  const previousFunction = () => {
    if (pagina > 1) setPagina(parseInt(pagina) - 1);
  };

  return (
    <div className={styles.pag}>
      <div className={styles.container}>
        <button className={styles.classbutton} onClick={previousFunction}>
          <img
            className={styles.previous}
            src="https://cdn-icons-png.flaticon.com/512/2989/2989988.png"
            alt="previous"
          />
        </button>
        <span>{pagina}{`/${maximo}`}</span>
   
        <button className={styles.classbutton} onClick={nextFunction}>
          <img
            className={styles.next}
            src="https://cdn-icons-png.flaticon.com/512/2989/2989988.png"
            alt="next"
          />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
