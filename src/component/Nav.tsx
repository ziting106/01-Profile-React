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
      id="top"
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
          <Link to={`/`}>
            <img src={`https://bibiya.tw/img/appleLogo.gif`} />
          </Link>
          <a
            href="/"
            className={
              pageName == "/charming"
                ? `${style.charmingLogo}`
                : `${style.mainpageLogo}` && pageName == "/self-reliance"
                ? `${style.selfRelianceLogo}`
                : `${style.mainpageLogo}` && pageName == "/mom&baby"
                ? `${style.momBabyLogo}`
                : `${style.mainpageLogo}`
            }
          >
            Angelica Liu
          </a>
        </div>
        <div
          className={
            pageName == "/charming"
              ? `${style.item} ${style.charmingColor}`
              : `${style.item}` && pageName == "/self-reliance"
              ? `${style.item} ${style.selfRelianceColor}`
              : `${style.item}` && pageName == "/mom&baby"
              ? `${style.item} ${style.momBabyColor}`
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
            to={`/javaScript`}
            className={pageName == "/javaScript" ? `${style.itemactive}` : ""}
          >
            JavaScript
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
