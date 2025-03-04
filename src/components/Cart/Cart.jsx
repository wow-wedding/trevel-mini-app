import React from "react"
import style from "./Cart.module.css"

const Cart = (props) => {

    return (
        <div>
            <div className={style.cartbox}>
                <div>
                <h3>{props.item.title}</h3>
                </div>
                <div className={style.cartimg}>
                    <img src={props.item.img} alt="" />
                </div>
                <div>
                    <p>{props.item.name}</p>
                </div>
                <div>
                    <h3>{props.item.price} руб.</h3>
                </div>
                <button className={style.button}>Купить</button>
            </div>
        </div>
    )
}

export default Cart;