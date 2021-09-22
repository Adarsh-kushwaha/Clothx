import React from 'react'
import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
const Cart = (props) => {
    const CartItems = [{ id: "c1", title: "T-Shirt", price: 50.00 }].map(item => <li>{item.title}</li>)
    return (
        <Modal onBackdropClose={props.onCloseCart}>
            <ul className={classes.cartItems}>{CartItems}</ul>
            <div className={classes.total}>
                <span >Total Amount</span>
                <span>50.00</span>
            </div>
            <div className={classes.actionBtn} onClick={props.onCloseCart}>
                <button className={classes.closeBtn}>
                    <span className={classes.text}>Close</span>
                </button>
                <button className={classes.button}>
                    <span className={classes.text}>Order</span>
                </button>
            </div>
        </Modal>
    )
}

export default Cart
