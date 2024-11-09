import "./Home.css";
import { useState } from "react";
import { Game } from "../../components";

import banner from "../../assets/images/banner.gif";
import buy from "../../assets/images/buttons/buy now.png";
import chart from "../../assets/images/buttons/chart.png";
import surf from "../../assets/images/boat.gif";

import getmoney from "../../assets/images/1.gif";
import tax from "../../assets/images/2.png";
import burn from "../../assets/images/3.gif";
import waterTransition from "../../assets/images/water.gif";
import runboo from "../../assets/images/run boo.gif";
import grass from "../../assets/images/LINE ground.png";
import community from "../../assets/images/community banner.gif";
import telegram from "../../assets/images/navbar/telegram icon.png";
import twitter from "../../assets/images/navbar/twitter icon.png";

export default function Home() {
  const [open, openGame] = useState(false);

  return (
    <>
      <Game open={open} openGame={openGame}></Game>
      <article className="home__container">
        <section className="intro__container">
          <img className="intro__img" src={banner}></img>
          <div id="game" className="intro__water">
            <img className="surf" src={surf}></img>
            <button className="buy__btn">
              <img src={buy}></img>
            </button>
            <button className="game__btn" onClick={() => openGame(!open)}>
              <p id="">PLAY GAME</p>
            </button>
            <img className="water-transition" src={waterTransition}></img>
          </div>
        </section>

        <section id="tokenomics" className="info__container">
          <h1>TOKENOMICS</h1>
          <div>
            <article>
              <img className="info__img" src={tax}></img>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, ea, magni obcaecati nisi.
              </p>
            </article>
            <article>
              <img className="info__img" src={getmoney}></img>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, ea, magni obcaecati nisi.
              </p>
            </article>
            <article>
              <img className="info__img" src={burn}></img>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, ea, magni obcaecati nisi.
              </p>
            </article>
          </div>
        </section>

        <img src={grass}></img>
        <section id="community" className="community">
          <img className="community__banner" src={community}></img>
          <div className="about">
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id earum
              est ab quibusdam tenetur nobis corporis, optio maiores molestiae
              porro eos facere, doloremque officia tempore excepturi, unde ipsa
              vero assumenda.
            </p>
            <div className="community__socials">
              <img className="community__icon" src={twitter}></img>
              <img className="community__icon" src={telegram}></img>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
