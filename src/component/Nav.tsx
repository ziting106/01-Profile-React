import React from "react";
import ReactDOM from "react-dom";
import { useLocation, useParams, Link } from "react-router-dom";
import style from "../css/Nav.module.css";

import AboutMe from "../page/AboutMe";

function Nav() {
  const location = useLocation();
  let pageName = location.pathname;
  return (
    <div
      id="apple"
      className={
        pageName == "/charming"
          ? `${style.navBar} ${style.charming}`
          : `${style.navBar}` && pageName == "/self-reliance"
          ? `${style.navBar} ${style.if}`
          : `${style.navBar}` && pageName == "/mom&baby"
          ? `${style.navBar} ${style.momBaby}`
          : `${style.navBar}`
      }
    >
      <nav>
        <div className={style.logoName}>
          <img src={`https://bibiya.tw/img/appleLogo.gif`} />
          <a href="/">Angelica Liu</a>
        </div>
        <div
          className={
            pageName == "/charming"
              ? `${style.item} ${style.charmingColor}`
              : `${style.item}`
          }
        >
          <Link
            to={`/`}
            className={pageName == "/" ? `${style.itemactive}` : ""}
          >
            設計專案
          </Link>
          <Link
            id="apple"
            to={`/about`}
            className={pageName == "/about" ? `${style.itemactive}` : ""}
          >
            關於我
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
