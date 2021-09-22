import React from 'react'
import Input from '../../UI/Input'
import classes from "./ClothItemForm.module.css"

const ClothItemForm = (props) => {
    return (
        <form>
            <Input label="amount" input={
                {
                id:"amount" + props.id, 
                type:"number", 
                min:"1", 
                max:"5",
                step:"1",
                defaultValue:"1"
            }}/>

            <button className={classes.button}>
                <span className={classes.text}>+ Add</span>
            </button>
        </form>
    )
}

export default ClothItemForm
