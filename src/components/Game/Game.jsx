import "./Game.css";

import { useEffect, useState } from "react";

import n3ds from "../../assets/images/n3ds.png";
import feather from "../../assets/images/feather.png";
import sun from "../../assets/images/sun.png";
import notax from "../../assets/images/notax.png";
import tax from "../../assets/images/tax.png";
import close from "../../assets/images/close.png";

import { Petal } from "../";

export default function Game({ open, openGame }) {
  const [sunName, setSun] = useState(sun);
  const [petalClicked, setClick] = useState(false);

  const sunFunction = () => {
    setClick(true);
    if (sunName == tax) {
      setSun(notax);
    } else {
      setSun(tax);
    }
  };

  let petals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div style={{ display: open ? "flex" : "none" }} className="n3ds">
      <div onClick={() => openGame(!open)} className="backdrop"></div>
      <img
        onClick={() => openGame(!open)}
        className="close__btn"
        src={close}
      ></img>
      <img className="n3ds-img" src={n3ds}></img>

      <div className="game__container">
        <h2 className="game-title">
          {!petalClicked
            ? "Tax or no tax"
            : sunName === notax
              ? "Tax me not"
              : "Tax me"}
        </h2>

        <img className="sun" src={sunName}></img>
        <div className="cards">
          <ul>
            {petals.map((petal, index) => {
              return <Petal sunFunction={sunFunction} key={index}></Petal>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
