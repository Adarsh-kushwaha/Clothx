import img1 from "../../assets/item1.jpg";
import img2 from "../../assets/item2.jpg";
import img3 from "../../assets/item3.jpg";
import React from "react";
import ClothItem from "./ClothItem/ClothItem";
import classes from "./AvailableClothes.module.css"


const DUMMY_CLOTHES = [
    {
        id: "c1",
        name: "Black T-Shirt",
        price: 99,
        image: img1
    },
    {
        id: "c2",
        name: "Blue Denim",
        price: 299,
        image: img2
    },
    {
        id: "c3",
        name: "Zebra Top",
        price: 249,
        image: img3
    },
    {
        id: "c4",
        name: "Random",
        price: 249,
        image: img1
    }

]

const AvailableClothes = () => {
    const clothes = DUMMY_CLOTHES.map((cloth) =>
        <ClothItem
            id={cloth.id}
            key={cloth.id}
            title={cloth.name}
            image={cloth.image}
            price={cloth.price}
        />)

    return (
        <>
            <div className={classes.clothes}>
                {clothes}
            </div>
        </>
    )
}

export default AvailableClothes;