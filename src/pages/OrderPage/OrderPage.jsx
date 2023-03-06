/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styles from "./OrderPage.module.css";
import OrdersComponent from "../../components/Orders/Orders";
import { useDispatch, useSelector } from "react-redux";
import { saveCart } from "../../redux/actions";
import { Link } from "react-router-dom";

const OrderPage = () => {
    const {email} = JSON.parse(localStorage.getItem("user"));
    const myOrders = useSelector((state) => state.cartSaved);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        dispatch(saveCart(email));
    }, []);

    const handleOrder = () => {
        setIsOpen(isOpen ? false : true);
    };

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {myOrders.length ? (
                    myOrders.map((item) => (
                        <div key={item.id} className={styles.subContainer}>
                            <div className={styles.data}>
                                <span>{`Pedido: ${item.code}`}</span>
                                <span>{`Estado: ${item.status}`}</span>
                                <span>{`Total compra: ${item.total}`}</span>
                                <img
                                    className={isOpen ? styles.icoOpen : styles.icoClose}
                                    onClick={handleOrder}
                                    src="https://cdn-icons-png.flaticon.com/512/9861/9861174.png"
                                    alt=""
                                />
                            </div>
                            {isOpen && (
                                <div className={styles.items}>
                                    {item.MenuItems?.map((menu, i) => (
                                        <OrdersComponent
                                            key={i}
                                            image={menu.url_image}
                                            name={menu.name}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className={styles.message}>
                        <h2>¿Aún no haces tu primer compra hoy... 🫣?</h2>
                        <Link to="/store">
                            <span>Haz tu compra ahora 😎</span>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderPage;
