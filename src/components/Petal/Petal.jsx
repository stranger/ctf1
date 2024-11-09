import "./Petal.css";

import feather from "../../assets/images/feather.png";
import { useState } from "react";

import notax from "../../assets/images/notax.png";
export default function Petal({ sunFunction }) {
  const [clicked, setClick] = useState(false);

  const changeClick = () => setClick(!clicked);

  return (
    <li onClick={() => sunFunction()} className={clicked ? "fall" : ""}>
      <img onClick={changeClick} src={feather}></img>
    </li>
  );
}
