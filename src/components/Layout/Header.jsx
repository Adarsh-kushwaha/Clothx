import React from "react";
import clothImg from "../../assets/storeimage.jpg"
import CartButton from "./CartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
          <h2>Cloth X</h2>
          <CartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes.mainImage}>
          <img src={clothImg} alt="clothes"/>
      </div>
    </>
  );
};

export default Header;
