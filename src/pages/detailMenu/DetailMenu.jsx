/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import {
  changeCartCount,
  getMenuById,
  changeCartTotal,
} from "../../redux/actions/index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./DetailMenu.module.css";
import CreateLogin from "../../components/Login/CreateLogin";

const DetailMenu = () => {

    const { id } = useParams();
    const [punctuation] = useState(3);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMenuById(id));
    }, [dispatch, id]);
    const detail = useSelector((state) => state.detailMenu);
    const { name, url_image, price, Tags, stock, description } = detail;


  const [loged, setLoged] = useState(true);

  const userName = JSON.parse(localStorage.getItem("user"));

  const handleCart = () => {
    if (!userName) {
      setLoged(false);
    } else {
      let orderArray = localStorage.getItem("order") || "[]";
      let totalOrder = localStorage.getItem("totalOrder") || 0;
      totalOrder = JSON.parse(totalOrder);

      const aux = JSON.parse(orderArray);
      const index = aux.findIndex((item) => item.id + "" === "" + detail.id);


            // si no esta repetido lo agrego
            if (index === -1) {
                orderArray = [...aux, { id: detail.id, quantity: 1 }];
                dispatch(changeCartCount("+"));
                dispatch(changeCartTotal({ type: "+", value: price }));
                const transform = JSON.stringify(orderArray);
                localStorage.setItem("order", transform);
                localStorage.setItem("totalOrder", totalOrder + price);
            }
        }
        // se transforma y se manda
    };

    return (
        <div className={styles.page}>
            {!loged && <CreateLogin />}
            <div className={styles.data}>
                <div className={styles.detail}>
                    <div className={styles.image}>
                        <div>
                            {parseInt(stock) === 0 && (
                                <div>
                                    <span> AGOTADO</span>
                                </div>
                            )}
                            <img src={url_image} alt={name} />
                        </div>
                    </div>
                    <div className={styles.info}>
                        <h1>{name}</h1>
                        <div className={styles.punctuation}>
                            <div>
                                <svg
                                    width="262"
                                    height="238"
                                    viewBox="0 0 262 238"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={
                                        punctuation >= 1 ? styles.star : styles.starWhite
                                    }>
                                    <path
                                        d="M104.171 82.6263L131 29.35L157.829 82.6263C160.678 88.2835 166.159 92.1491 172.444 92.9341L232.55 100.442L189.295 139.349C184.328 143.816 182.073 150.563 183.354 157.119L194.397 213.632L139.69 185.496C134.236 182.692 127.764 182.692 122.31 185.496L67.6026 213.632L78.6462 157.119C79.9274 150.563 77.6717 143.816 72.7053 139.349L29.4504 100.442L89.5559 92.9341C95.8411 92.1491 101.322 88.2835 104.171 82.6263Z"
                                        stroke="#FFB800"
                                        stroke-width="30"
                                    />
                                </svg>
                            </div>
                            <div>
                                <svg
                                    width="262"
                                    height="238"
                                    viewBox="0 0 262 238"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={
                                        punctuation >= 2 ? styles.star : styles.starWhite
                                    }>
                                    <path
                                        d="M104.171 82.6263L131 29.35L157.829 82.6263C160.678 88.2835 166.159 92.1491 172.444 92.9341L232.55 100.442L189.295 139.349C184.328 143.816 182.073 150.563 183.354 157.119L194.397 213.632L139.69 185.496C134.236 182.692 127.764 182.692 122.31 185.496L67.6026 213.632L78.6462 157.119C79.9274 150.563 77.6717 143.816 72.7053 139.349L29.4504 100.442L89.5559 92.9341C95.8411 92.1491 101.322 88.2835 104.171 82.6263Z"
                                        stroke="#FFB800"
                                        stroke-width="30"
                                    />
                                </svg>
                            </div>
                            <div>
                                <svg
                                    width="262"
                                    height="238"
                                    viewBox="0 0 262 238"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={
                                        punctuation >= 3 ? styles.star : styles.starWhite
                                    }>
                                    <path
                                        d="M104.171 82.6263L131 29.35L157.829 82.6263C160.678 88.2835 166.159 92.1491 172.444 92.9341L232.55 100.442L189.295 139.349C184.328 143.816 182.073 150.563 183.354 157.119L194.397 213.632L139.69 185.496C134.236 182.692 127.764 182.692 122.31 185.496L67.6026 213.632L78.6462 157.119C79.9274 150.563 77.6717 143.816 72.7053 139.349L29.4504 100.442L89.5559 92.9341C95.8411 92.1491 101.322 88.2835 104.171 82.6263Z"
                                        stroke="#FFB800"
                                        stroke-width="30"
                                    />
                                </svg>
                            </div>
                            <div>
                                <svg
                                    width="262"
                                    height="238"
                                    viewBox="0 0 262 238"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={
                                        punctuation >= 4 ? styles.star : styles.starWhite
                                    }>
                                    <path
                                        d="M104.171 82.6263L131 29.35L157.829 82.6263C160.678 88.2835 166.159 92.1491 172.444 92.9341L232.55 100.442L189.295 139.349C184.328 143.816 182.073 150.563 183.354 157.119L194.397 213.632L139.69 185.496C134.236 182.692 127.764 182.692 122.31 185.496L67.6026 213.632L78.6462 157.119C79.9274 150.563 77.6717 143.816 72.7053 139.349L29.4504 100.442L89.5559 92.9341C95.8411 92.1491 101.322 88.2835 104.171 82.6263Z"
                                        stroke="#FFB800"
                                        stroke-width="30"
                                    />
                                </svg>
                            </div>
                            <div>
                                <svg
                                    width="262"
                                    height="238"
                                    viewBox="0 0 262 238"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={
                                        punctuation >= 5 ? styles.star : styles.starWhite
                                    }>
                                    <path
                                        d="M104.171 82.6263L131 29.35L157.829 82.6263C160.678 88.2835 166.159 92.1491 172.444 92.9341L232.55 100.442L189.295 139.349C184.328 143.816 182.073 150.563 183.354 157.119L194.397 213.632L139.69 185.496C134.236 182.692 127.764 182.692 122.31 185.496L67.6026 213.632L78.6462 157.119C79.9274 150.563 77.6717 143.816 72.7053 139.349L29.4504 100.442L89.5559 92.9341C95.8411 92.1491 101.322 88.2835 104.171 82.6263Z"
                                        stroke="#FFB800"
                                        stroke-width="30"
                                    />
                                </svg>
                            </div>
                            <span>(3.3)</span>
                        </div>
                        {detail.recomend_first && <span>Producto recomendado</span>}
                        <span className={styles.price}>$ {price}</span>
                        <span className={styles.targetName}>tarjetas débito y crédito</span>
                        <div className={styles.targets}>
                            <img
                                className={styles.visa}
                                src="https://cdn-icons-png.flaticon.com/128/196/196578.png"
                                alt=""
                            />
                            <img
                                className={styles.amex}
                                src="https://cdn-icons-png.flaticon.com/128/179/179431.png"
                                alt=""
                            />
                            <img
                                className={styles.master}
                                src="https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png"
                                alt=""
                            />
                        </div>
                        <div className={styles.tagEnv}>
                            <div className={styles.tags}>
                                <span>Categorías:</span>
                                <div>
                                    {Tags?.map((element) => (
                                        <span key={element.id}>
                                            {element.name[0].toUpperCase() +
                                                element.name.slice(1)}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.envio}>
                                <span>Envío gratis</span>
                            </div>
                        </div>
                        {parseInt(stock) < 20 && <span
                            className={
                                parseInt(stock) === 0 ? styles.stockRed : styles.stock
                            }>{`Stock disponible : ${stock}`}</span>}
                    </div>
                </div>
                        <p>{ description}</p>
                <button className={styles.toCart} onClick={handleCart}>
                    Agregar al carrito
                </button>

            </div>
          </div>
          <div className={styles.info}>
            <h1>{name}</h1>
            <div className={styles.punctuation}>
              <div>
                <svg
                  width="262"
                  height="238"
                  viewBox="0 0 262 238"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={punctuation >= 1 ? styles.star : styles.starWith}
                  onClick={() => handlePunctuation(1)}
                >
                  <path
                    d="M99.7049 80.3775L131 18.2333L162.295 80.3775C164.394 84.5459 168.433 87.3942 173.064 87.9727L244.033 96.8371L192.639 143.066C188.979 146.358 187.317 151.329 188.261 156.16L201.283 222.795L137.403 189.943C133.384 187.876 128.616 187.876 124.597 189.943L60.7173 222.795L73.739 156.16C74.683 151.329 73.021 146.358 69.3615 143.066L17.9666 96.8371L88.9362 87.9727C93.5674 87.3942 97.6058 84.5459 99.7049 80.3775Z"
                    stroke="#FFE600"
                    stroke-width="20"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="262"
                  height="238"
                  viewBox="0 0 262 238"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={punctuation >= 2 ? styles.star : styles.starWith}
                  onClick={() => handlePunctuation(2)}
                >
                  <path
                    d="M99.7049 80.3775L131 18.2333L162.295 80.3775C164.394 84.5459 168.433 87.3942 173.064 87.9727L244.033 96.8371L192.639 143.066C188.979 146.358 187.317 151.329 188.261 156.16L201.283 222.795L137.403 189.943C133.384 187.876 128.616 187.876 124.597 189.943L60.7173 222.795L73.739 156.16C74.683 151.329 73.021 146.358 69.3615 143.066L17.9666 96.8371L88.9362 87.9727C93.5674 87.3942 97.6058 84.5459 99.7049 80.3775Z"
                    stroke="#FFE600"
                    stroke-width="20"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="262"
                  height="238"
                  viewBox="0 0 262 238"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={punctuation >= 3 ? styles.star : styles.starWith}
                  onClick={() => handlePunctuation(3)}
                >
                  <path
                    d="M99.7049 80.3775L131 18.2333L162.295 80.3775C164.394 84.5459 168.433 87.3942 173.064 87.9727L244.033 96.8371L192.639 143.066C188.979 146.358 187.317 151.329 188.261 156.16L201.283 222.795L137.403 189.943C133.384 187.876 128.616 187.876 124.597 189.943L60.7173 222.795L73.739 156.16C74.683 151.329 73.021 146.358 69.3615 143.066L17.9666 96.8371L88.9362 87.9727C93.5674 87.3942 97.6058 84.5459 99.7049 80.3775Z"
                    stroke="#FFE600"
                    stroke-width="20"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="262"
                  height="238"
                  viewBox="0 0 262 238"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={punctuation >= 4 ? styles.star : styles.starWith}
                  onClick={() => handlePunctuation(4)}
                >
                  <path
                    d="M99.7049 80.3775L131 18.2333L162.295 80.3775C164.394 84.5459 168.433 87.3942 173.064 87.9727L244.033 96.8371L192.639 143.066C188.979 146.358 187.317 151.329 188.261 156.16L201.283 222.795L137.403 189.943C133.384 187.876 128.616 187.876 124.597 189.943L60.7173 222.795L73.739 156.16C74.683 151.329 73.021 146.358 69.3615 143.066L17.9666 96.8371L88.9362 87.9727C93.5674 87.3942 97.6058 84.5459 99.7049 80.3775Z"
                    stroke="#FFE600"
                    stroke-width="20"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="262"
                  height="238"
                  viewBox="0 0 262 238"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={punctuation >= 5 ? styles.star : styles.starWith}
                  onClick={() => handlePunctuation(5)}
                >
                  <path
                    d="M99.7049 80.3775L131 18.2333L162.295 80.3775C164.394 84.5459 168.433 87.3942 173.064 87.9727L244.033 96.8371L192.639 143.066C188.979 146.358 187.317 151.329 188.261 156.16L201.283 222.795L137.403 189.943C133.384 187.876 128.616 187.876 124.597 189.943L60.7173 222.795L73.739 156.16C74.683 151.329 73.021 146.358 69.3615 143.066L17.9666 96.8371L88.9362 87.9727C93.5674 87.3942 97.6058 84.5459 99.7049 80.3775Z"
                    stroke="#FFE600"
                    stroke-width="20"
                  />
                </svg>
              </div>
            </div>
            {detail.recomend_first && <span>Producto recomendado</span>}
            <span className={styles.price}>$ {price}</span>
            <span className={styles.targetName}>tarjetas débito y crédito</span>
            <div className={styles.targets}>
              <img
                className={styles.visa}
                src="https://cdn-icons-png.flaticon.com/128/196/196578.png"
                alt=""
              />
              <img
                className={styles.amex}
                src="https://cdn-icons-png.flaticon.com/128/179/179431.png"
                alt=""
              />
              <img
                className={styles.master}
                src="https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png"
                alt=""
              />
            </div>
            <div className={styles.tagEnv}>
              <div className={styles.tags}>
                <span>Etiquetas:</span>
                <div>
                  {Tags?.map((element) => (
                    <span key={element.id}>
                      {element.name[0].toUpperCase() + element.name.slice(1)}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.envio}>
                <span>Envío gratis</span>
              </div>
            </div>
            <span
              className={parseInt(stock) === 0 ? styles.stockRed : styles.stock}
            >{`Stock disponible : ${stock}`}</span>
            <p>Esto es una descripción temporal que deberá ser remplazada</p>
          </div>
        </div>
        {stock ? (<button className={styles.toCart} onClick={handleCart}>
          Agregar al carrito
        </button>): <h4>Producto agotado... Lo sentimos</h4>}
        
      </div>
    </div>
  );
};
export default DetailMenu;
