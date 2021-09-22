import React from 'react'
import Card from '../../UI/Card'
import classes from "./ClothItem.module.css"
import CartIcon from '../../Cart/CartIcon'


const ClothItem = (props) => {
    const price = `$${props.price.toFixed()}`
    return (
        <Card>
            <div className={classes.itemInfo}>
                <img src={props.image} alt="images" />
                <h3>{props.title}</h3>
                <div className={classes.price}>{price}</div>
            </div>
            <div className={classes.buttonGroup}>
                <button className={classes.button}>
                    <span className={classes.icon}><CartIcon /></span>
                    <span className={classes.text}>Add</span>
                </button>
                <button className={classes.button2}>
                    <span className={classes.text}>View</span>
                </button>
               
            </div>
        </Card>
    )
}

export default ClothItem
